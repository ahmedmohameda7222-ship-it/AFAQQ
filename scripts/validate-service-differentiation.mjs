import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const landing = readFileSync(new URL("../src/app/services/page.tsx", import.meta.url), "utf8");
const detail = readFileSync(new URL("../src/app/services/[slug]/page.tsx", import.meta.url), "utf8");
const visual = readFileSync(new URL("../src/components/afaaq/service-process-visual.tsx", import.meta.url), "utf8");

assert(!landing.includes("String(index + 1).padStart"), "Services landing must not use decorative numbering.");
assert(!detail.includes("String(index + 1).padStart"), "Service detail must not use decorative numbering.");
assert(detail.includes("ServiceProcessVisual"), "Service detail must render ServiceProcessVisual.");
assert(visual.includes('"testing-commissioning"'), "Service visual must define Testing & Commissioning content.");
assert(visual.includes('"protection-control"'), "Service visual must define Protection & Control content.");
assert(visual.includes('"electrical-installation"'), "Service visual must define Electrical Installation content.");
assert(visual.includes('"power-quality"'), "Service visual must define Power Quality content.");
assert(visual.includes('"operation-maintenance"'), "Service visual must define Operation & Maintenance content.");
assert(visual.includes('"engineering-consultancy"'), "Service visual must define Engineering Support content.");
assert(visual.includes('"training"'), "Service visual must define Training content.");

console.log("Service differentiation validation passed.");
