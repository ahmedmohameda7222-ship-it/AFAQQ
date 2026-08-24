import { existsSync, readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const file of ["PRODUCT.md", "DESIGN.md"]) {
  assert(existsSync(new URL(`../${file}`, import.meta.url)), `${file} is missing.`);
}

const product = readFileSync(new URL("../PRODUCT.md", import.meta.url), "utf8");
const design = readFileSync(new URL("../DESIGN.md", import.meta.url), "utf8");

assert(product.includes("Utility project managers"), "PRODUCT.md must define the primary utility/EPC audience.");
assert(product.includes("established electrical engineering"), "PRODUCT.md must lock AFAAQ positioning.");
assert(design.includes("Corporate Grid Power"), "DESIGN.md must lock the approved design direction.");
assert(design.includes("Hero blend"), "DESIGN.md must record the Hero blend lock.");
assert(design.includes("No project photography"), "DESIGN.md must record the project photography policy.");
assert(design.includes("Power Rail"), "DESIGN.md must record the AFAAQ signature device.");
assert(design.includes("Public Sans"), "DESIGN.md must record the final body typography.");

console.log("Brand governance validation passed.");
