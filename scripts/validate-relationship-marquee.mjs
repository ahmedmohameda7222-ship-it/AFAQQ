import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const relationships = readFileSync(new URL("../src/components/afaaq/relationship-rail.tsx", import.meta.url), "utf8");
const globals = readFileSync(new URL("../src/styles/globals.css", import.meta.url), "utf8");

assert(relationships.includes('import Image from "next/image"'), "Relationship rail must render company icons/logos with next/image.");
assert(relationships.includes("clientVisuals"), "Relationship rail must map known companies to visual icons.");
assert(relationships.includes("google.com/s2/favicons"), "Relationship rail must use the approved favicon source for known company icons.");
assert(relationships.includes('EGEMAC: { domain: "egemac.com.eg" }'), "EGEMAC must use its official website icon.");
assert(
  relationships.includes('"Arab Organization for Industrialization": { domain: "aoi.org.eg" }'),
  "Arab Organization for Industrialization must use its official website icon.",
);
assert(relationships.includes("const items = [...names, ...names]"), "Relationship rail must duplicate items for a seamless loop.");
assert(relationships.includes("relationship-marquee__track"), "Relationship rail must restore the horizontal moving track.");
assert(relationships.includes("relationship-marquee__item"), "Relationship rail items must expose a reduced-motion sizing hook.");
assert(relationships.includes("relationship-marquee__separator"), "Relationship rail separators must expose a reduced-motion visibility hook.");
assert(relationships.includes("aria-hidden={index >= names.length}"), "Duplicate loop items must be hidden from assistive technology.");
assert(relationships.includes("Selected Project & Client Relationships"), "Corporate relationship heading must remain unchanged.");
assert(globals.includes("@keyframes relationship-marquee"), "Global CSS must define the relationship marquee animation.");
assert(globals.includes("animation: relationship-marquee 50s linear infinite"), "Relationship marquee must move slowly and continuously.");
assert(globals.includes("animation-play-state: paused"), "Relationship marquee must pause on hover/focus.");
assert(globals.includes("@media (prefers-reduced-motion: reduce)"), "Relationship marquee must respect reduced motion.");
assert(globals.includes(".relationship-marquee__item"), "Reduced-motion CSS must target each relationship item.");
assert(globals.includes("flex: 1 1 100%"), "Reduced-motion relationship items must fit the viewport width.");
assert(globals.includes("min-width: 0"), "Reduced-motion relationship items must allow long names to wrap.");
assert(globals.includes(".relationship-marquee__separator"), "Reduced-motion CSS must target separators.");
assert(globals.includes("display: none"), "Reduced-motion fallback must hide duplicate/separator-only presentation elements.");

console.log("Relationship marquee + company icon invariants OK.");
