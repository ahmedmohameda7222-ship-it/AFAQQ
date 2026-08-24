import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const about = readFileSync(new URL("../src/app/about/page.tsx", import.meta.url), "utf8");
const rail = readFileSync(new URL("../src/components/afaaq/relationship-rail.tsx", import.meta.url), "utf8");

assert(!about.includes("String(index + 1).padStart"), "About must not use decorative Engineering Focus numbering.");
assert(about.includes('motion="static"'), "About must use the static relationships presentation.");
assert(rail.includes('motion?: "marquee" | "static"'), "RelationshipRail must expose a static mode.");
assert(rail.includes('motion = "marquee"'), "RelationshipRail must keep marquee as the Home-compatible default.");

console.log("About institutional validation passed.");
