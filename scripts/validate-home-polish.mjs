import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const projectIndex = readFileSync(new URL("../src/components/afaaq/project-showcase-rail.tsx", import.meta.url), "utf8");
const footer = readFileSync(new URL("../src/components/layout/site-footer.tsx", import.meta.url), "utf8");
const relationshipRail = readFileSync(new URL("../src/components/afaaq/relationship-rail.tsx", import.meta.url), "utf8");
const globals = readFileSync(new URL("../src/styles/globals.css", import.meta.url), "utf8");

assert(
  home.includes('src="/images/home/home-substation-original-1440.jpg"'),
  "Home hero must keep the approved substation photo.",
);
assert(home.includes("ProjectMedia"), "Home flagship project must keep the project-reference fallback surface.");
const featuredProjectMedia = home.match(/<ProjectMedia[\s\S]*?\/>/)?.[0] ?? "";
assert(
  featuredProjectMedia && !featuredProjectMedia.includes("priority"),
  "Below-the-fold Home flagship project surface must remain lazy-loaded so it does not compete with the hero LCP image.",
);
assert(home.includes("AboutBrandArtwork"), "Home About must use the approved brand artwork until authenticated field photography is available.");
assert(!home.includes('/images/projects/rcc.jpg'), "Home About must not present unrelated stock project imagery as AFAAQ evidence.");
assert(home.includes("companyFacts"), "Home proof area must expose verified company credibility facts.");
assert(projectIndex.includes("ProjectMedia"), "Home project portfolio must keep the project-reference fallback surfaces.");
assert(!projectIndex.includes('"use client"'), "Home project portfolio must stay server-rendered and non-carousel.");
assert(projectIndex.includes("lg:grid-cols-3"), "Home project portfolio must retain a stable desktop grid.");
assert(
  footer.includes('src="/brand/afaaq-mark-reversed.svg"'),
  "Dark footer must use the reversed AFAAQ mark for sufficient contrast.",
);
assert(
  relationshipRail.includes("relationship-marquee__duplicate"),
  "Relationship marquee duplicates must have a reduced-motion selector.",
);
assert(
  globals.includes(".relationship-marquee__duplicate") && globals.includes("display: none;"),
  "Reduced motion must hide the duplicated relationship set.",
);
assert(
  globals.includes(".relationship-rail__viewport {\n    overflow: visible;") &&
    globals.includes("width: auto;") &&
    globals.includes("flex-wrap: wrap;") &&
    globals.includes("white-space: normal;"),
  "Reduced motion must expose the complete first relationship set without clipping.",
);

console.log("Engineered Editorial 2.0 Home integrity invariants OK.");
