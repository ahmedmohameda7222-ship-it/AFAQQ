import { readFile } from "node:fs/promises";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const [page, styles, packageJson, materializer] = await Promise.all([
  readFile("src/app/page.tsx", "utf8"),
  readFile("src/styles/globals.css", "utf8"),
  readFile("package.json", "utf8"),
  readFile("scripts/materialize-home-hero.mjs", "utf8"),
]);

const pkg = JSON.parse(packageJson);

assert(
  page.includes('src="/images/home/home-substation-original.avif"'),
  "Home hero must use the checksum-verified original-photo asset.",
);
assert(
  page.includes('className="home-hero-media '),
  "Home hero media must use the shared image-blend treatment.",
);
assert(
  page.includes("aspect-[16/10]") && page.includes("sm:aspect-[16/9]"),
  "Home hero must keep a compact cinematic crop on mobile/tablet.",
);
assert(
  !page.includes("lg:aspect-[4/5]") && !page.includes("from-black/24"),
  "Home hero must not retain the old tall boxed crop or dark overlay.",
);
assert(
  styles.includes(".home-hero-media::after") &&
    styles.includes("linear-gradient(") &&
    styles.includes("to right"),
  "Home hero must define the desktop image-to-canvas edge fade.",
);
assert(
  materializer.includes("49298") &&
    materializer.includes("821808867b05d135576a15ede1a7971d0bd008af3828bf7164e8d75265349c37"),
  "Home hero materializer must verify the expected byte count and SHA-256.",
);
assert(
  pkg.scripts["materialize:hero"] &&
    pkg.scripts["vercel-build"].startsWith("npm run materialize:hero"),
  "Vercel build must materialize the verified hero before validation/build.",
);

for (const copy of [
  "Electrical Engineering & Contracting",
  "Electrical testing, commissioning and protection for power systems.",
  "AFAAQ ARAB supports utilities, EPC contractors and power-system teams across substations and control infrastructure, from electrical installation and system integration through testing, energization and handover.",
  "Discuss a Project Scope",
  "View Our Projects",
]) {
  assert(page.includes(copy), `Home hero copy changed unexpectedly: ${copy}`);
}

console.log("Home hero integrity OK: original asset pipeline, blend treatment and copy are locked.");
