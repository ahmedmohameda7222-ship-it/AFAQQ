import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const layout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
const globals = readFileSync(new URL("../src/styles/globals.css", import.meta.url), "utf8");

assert(layout.includes("Archivo"), "Corporate Grid Power must load Archivo for display typography.");
assert(layout.includes("--font-display"), "Archivo must be exposed as --font-display.");
assert(globals.includes("--canvas: #ffffff"), "Global canvas must be Corporate White.");
assert(globals.includes("--surface: #f4f7fa"), "Global surface must be Cool Surface.");
assert(globals.includes("--brand-navy: #0a2f82"), "AFAAQ Navy token must match the approved mark.");
assert(globals.includes("--brand-deep-navy: #061d58"), "Deep Navy token must be available for authority surfaces.");
assert(globals.includes("--brand-blue: #0b8cff"), "Electric Blue token must match the approved mark.");
assert(globals.includes(".font-display"), "Global CSS must expose a display-font utility.");

console.log("Corporate Grid Power foundation invariants OK.");
