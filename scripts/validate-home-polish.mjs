import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const projectIndex = readFileSync(new URL("../src/components/afaaq/project-showcase-rail.tsx", import.meta.url), "utf8");

assert(
  home.includes('src="/images/home/home-substation-original-1440.jpg"'),
  "Home hero must keep the approved substation photo.",
);
assert(home.includes("ProjectMedia"), "Home flagship project must be image-led.");
const featuredProjectMedia = home.match(/<ProjectMedia[\s\S]*?\/>/)?.[0] ?? "";
assert(
  featuredProjectMedia && !featuredProjectMedia.includes("priority"),
  "Below-the-fold Home flagship project image must remain lazy-loaded so it does not compete with the hero LCP image.",
);
assert(projectIndex.includes("ProjectMedia"), "Home project portfolio cards must include project imagery.");
assert(!home.includes("AboutBrandArtwork"), "Home About must not use the brochure artwork component.");
assert(
  home.includes('/images/projects/rcc.jpg'),
  "Home About must use the approved real engineering/commissioning photograph.",
);
assert(home.includes("companyFacts"), "Home proof area must expose verified company credibility facts.");
assert(!projectIndex.includes('"use client"'), "Home project portfolio must stay server-rendered and non-carousel.");
assert(projectIndex.includes("lg:grid-cols-3"), "Home project portfolio must retain a stable desktop grid.");

console.log("Engineered Editorial 2.0 Home invariants OK.");
