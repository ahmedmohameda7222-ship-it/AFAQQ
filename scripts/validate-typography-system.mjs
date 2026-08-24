import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const layout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
const label = readFileSync(new URL("../src/components/primitives/section-label.tsx", import.meta.url), "utf8");
const pages = [
  "../src/app/page.tsx",
  "../src/app/services/page.tsx",
  "../src/app/services/[slug]/page.tsx",
  "../src/app/projects/page.tsx",
  "../src/app/projects/[slug]/page.tsx",
  "../src/app/about/page.tsx",
  "../src/app/contact/page.tsx",
];

assert(layout.includes("Public_Sans"), "Root layout must use Public Sans for body/navigation typography.");
assert(!layout.includes("IBM_Plex_Sans"), "IBM Plex Sans must no longer be the main body family.");
assert(!label.includes("font-technical"), "SectionLabel must never use the technical mono family.");

for (const relativePath of pages) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  assert(!/tracking-\[-0\.0(?:48|49|5\d)em\]/.test(source), `${relativePath} still uses extreme negative display tracking.`);
}

console.log("Typography system validation passed.");
