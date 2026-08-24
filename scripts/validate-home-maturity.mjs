import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const capability = readFileSync(new URL("../src/components/afaaq/capability-grid.tsx", import.meta.url), "utf8");
const execution = readFileSync(new URL("../src/components/afaaq/execution-track.tsx", import.meta.url), "utf8");
const relationships = readFileSync(new URL("../src/components/afaaq/relationship-rail.tsx", import.meta.url), "utf8");
const projects = readFileSync(new URL("../src/components/afaaq/project-reference-board.tsx", import.meta.url), "utf8");
const header = readFileSync(new URL("../src/components/layout/site-header.tsx", import.meta.url), "utf8");
const footer = readFileSync(new URL("../src/components/layout/site-footer.tsx", import.meta.url), "utf8");

assert(home.includes("Power-system testing, commissioning and protection."), "Hero must use the shorter technical brand statement.");
assert(home.includes("Engineering disciplines for controlled power-system delivery."), "Capabilities intro must use a shorter institutional heading.");
assert(home.includes("From engineering review to energization."), "Execution intro must use a shorter process heading.");
assert(home.includes("Engineering power systems since"), "About statement must be shorter and institution-led.");
assert(home.includes("home-final-cta__content"), "Final CTA must use a single-column content rhythm rather than the repeated split layout.");
assert(home.includes('[--hero-canvas:#f4f3ef]'), "Hero blend base must remain locked.");
assert(home.includes('src="/images/home/home-substation-original-1440.jpg"'), "Hero image must remain locked.");

assert(capability.includes("supporting-capability-index"), "Supporting capabilities must render as an engineering index.");
assert(!capability.includes("lg:grid-cols-4"), "Supporting capabilities must not remain a four-card grid.");
assert(execution.includes("execution-process__rail"), "Execution must render as a connected process rail.");
assert(!execution.includes("gap-px border border-[var(--rule)] bg-[var(--rule)]"), "Execution must not remain a boxed card grid.");

assert(relationships.includes("sm:h-16 sm:w-16"), "Relationship marks must have stronger visual presence.");
assert(relationships.includes("border border-[var(--rule)] bg-[var(--canvas)]"), "Motion control must be integrated as a deliberate control surface.");

assert(projects.includes('text-[0.78rem] font-semibold uppercase'), "Project metadata labels must be legible at the refined scale.");
assert(projects.includes('text-[0.94rem] font-semibold leading-6'), "Secondary project technical metadata must be enlarged.");
assert(header.includes('sm:w-[70px]'), "Desktop header logo must have stronger brand presence.");
assert(header.includes('sm:h-[92px]'), "Header height must support the larger brand mark.");
assert(footer.includes('text-[1rem] text-white/88'), "Footer navigation/contact text must remain legible at the refined scale.");

console.log("Home maturity refinement invariants OK.");
