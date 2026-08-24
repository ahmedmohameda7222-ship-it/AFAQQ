import { existsSync, readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const rail = readFileSync(new URL("../src/components/afaaq/relationship-rail.tsx", import.meta.url), "utf8");
const globals = readFileSync(new URL("../src/styles/globals.css", import.meta.url), "utf8");

assert(rail.includes('"use client"'), "Relationship rail must be interactive to expose explicit motion control.");
assert(rail.includes("Pause motion"), "Relationship rail must expose a Pause motion control.");
assert(rail.includes("Resume motion"), "Relationship rail must expose a Resume motion control.");
assert(rail.includes("aria-pressed={paused}"), "Motion control must expose paused state to assistive technology.");
assert(rail.includes("relationship-marquee__paused"), "Relationship rail must expose an explicit paused-state hook.");
assert(globals.includes(".relationship-marquee__paused .relationship-marquee__track"), "Global CSS must stop animation for explicit paused state.");
assert(rail.includes("localSrc"), "Relationship visual mapping must support local relationship marks before favicon fallback.");
assert(rail.includes('/brand/relationships/schneider-electric.svg'), "Schneider Electric must use the verified local mark.");
assert(rail.includes('/brand/relationships/abb.svg'), "ABB must use the verified local mark.");
assert(existsSync(new URL("../public/brand/relationships/schneider-electric.svg", import.meta.url)), "Schneider Electric local mark is missing.");
assert(existsSync(new URL("../public/brand/relationships/abb.svg", import.meta.url)), "ABB local mark is missing.");

console.log("Relationship quality validation passed.");
