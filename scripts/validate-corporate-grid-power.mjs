import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const layout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
const globals = readFileSync(new URL("../src/styles/globals.css", import.meta.url), "utf8");
const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");

assert(layout.includes("Archivo"), "Corporate Grid Power must load Archivo for display typography.");
assert(layout.includes("--font-display"), "Archivo must be exposed as --font-display.");
assert(globals.includes("--canvas: #ffffff"), "Global canvas must be Corporate White.");
assert(globals.includes("--surface: #f4f7fa"), "Global surface must be Cool Surface.");
assert(globals.includes("--brand-navy: #0a2f82"), "AFAAQ Navy token must match the approved mark.");
assert(globals.includes("--brand-deep-navy: #061d58"), "Deep Navy token must be available for authority surfaces.");
assert(globals.includes("--brand-blue: #0b8cff"), "Electric Blue token must match the approved mark.");
assert(globals.includes(".font-display"), "Global CSS must expose a display-font utility.");

assert(
  home.includes('src="/images/home/home-substation-original-1440.jpg"'),
  "Hero image must remain unchanged.",
);
assert(home.includes("priority"), "Hero image must remain priority/LCP media.");
assert(
  home.includes('[--hero-canvas:#f4f3ef]'),
  "Hero must isolate its approved warm blend base from the new global canvas.",
);
assert(
  home.includes("linear-gradient(180deg, var(--hero-canvas) 0%"),
  "Mobile Hero blend must remain on the approved warm base.",
);
assert(
  home.includes("linear-gradient(90deg, var(--hero-canvas) 0%"),
  "Desktop Hero blend must remain on the approved warm base.",
);
assert(home.includes("<PowerRail"), "Home must render the AFAAQ Power Rail immediately after Hero.");
assert(!home.includes("Power System Experience"), "Old oversized voltage proof section must be removed from Home.");

console.log("Corporate Grid Power foundation and Hero invariants OK.");
