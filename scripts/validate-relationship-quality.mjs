import { existsSync, readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const rail = readFileSync(new URL("../src/components/afaaq/relationship-rail.tsx", import.meta.url), "utf8");
const globals = readFileSync(new URL("../src/styles/globals.css", import.meta.url), "utf8");
const schneiderMarkUrl = new URL("../public/brand/relationships/schneider-electric.svg", import.meta.url);
const abbMarkUrl = new URL("../public/brand/relationships/abb.svg", import.meta.url);

assert(rail.includes('"use client"'), "Relationship rail must be interactive to expose explicit motion control.");
assert(rail.includes("Pause motion"), "Relationship rail must expose a Pause motion control.");
assert(rail.includes("Resume motion"), "Relationship rail must expose a Resume motion control.");
assert(rail.includes("aria-pressed={paused}"), "Motion control must expose paused state to assistive technology.");
assert(rail.includes("relationship-marquee__paused"), "Relationship rail must expose an explicit paused-state hook.");
assert(rail.includes("relationship-marquee__control"), "Relationship motion button must expose a reduced-motion control hook.");
assert(globals.includes(".relationship-marquee__paused .relationship-marquee__track"), "Global CSS must stop animation for explicit paused state.");
assert(globals.includes(".relationship-marquee__control"), "Reduced-motion CSS must target the motion control.");
assert(rail.includes("localSrc"), "Relationship visual mapping must support verified local relationship marks before favicon fallback.");
assert(rail.includes('/brand/relationships/schneider-electric.svg'), "Schneider Electric must use the verified local mark.");
assert(rail.includes('/brand/relationships/abb.svg'), "ABB must use the verified local mark.");
assert(existsSync(schneiderMarkUrl), "Schneider Electric local mark is missing.");
assert(existsSync(abbMarkUrl), "ABB local mark is missing.");

const schneiderMark = readFileSync(schneiderMarkUrl, "utf8").toLowerCase();
const abbMark = readFileSync(abbMarkUrl, "utf8").toLowerCase();
assert(schneiderMark.includes('#3dcd58'), "Schneider Electric mark must use its verified green brand color, not a default-black glyph.");
assert(abbMark.includes('#ff000f'), "ABB mark must use its verified red brand color, not a default-black glyph.");
assert(!schneiderMark.includes('<path d='), "Schneider Electric mark must not rely on a default-black SVG path.");
assert(!abbMark.includes('<path d='), "ABB mark must not rely on a default-black SVG path.");
assert(
  /logoUrl \? \([\s\S]*?<Image[\s\S]*?\) : \([\s\S]*?fallbackMark\(name\)/.test(rail),
  "Fallback initials must render only when no logo image is available, never underneath transparent company marks.",
);

const expectedDomains = [
  'elsewedyelectric.com',
  'madkour.com.eg',
  'gevernova.com',
  'siemens-energy.com',
  'hitachienergy.com',
  'egemac.com.eg',
  'eetc.gov.eg',
  'aoi.org.eg',
];
for (const domain of expectedDomains) {
  assert(rail.includes(`domain: "${domain}"`), `Relationship mapping must keep the verified official domain ${domain}.`);
}

console.log("Relationship quality validation passed.");
