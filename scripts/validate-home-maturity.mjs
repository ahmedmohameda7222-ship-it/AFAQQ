import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const capability = readFileSync(new URL("../src/components/afaaq/capability-grid.tsx", import.meta.url), "utf8");
const companyScale = readFileSync(new URL("../src/components/afaaq/company-scale.tsx", import.meta.url), "utf8");
const execution = readFileSync(new URL("../src/components/afaaq/execution-track.tsx", import.meta.url), "utf8");
const relationships = readFileSync(new URL("../src/components/afaaq/relationship-rail.tsx", import.meta.url), "utf8");
const projects = readFileSync(new URL("../src/components/afaaq/project-reference-board.tsx", import.meta.url), "utf8");
const header = readFileSync(new URL("../src/components/layout/site-header.tsx", import.meta.url), "utf8");
const mobileNav = readFileSync(new URL("../src/components/layout/mobile-nav.tsx", import.meta.url), "utf8");
const footer = readFileSync(new URL("../src/components/layout/site-footer.tsx", import.meta.url), "utf8");
const globals = readFileSync(new URL("../src/styles/globals.css", import.meta.url), "utf8");

assert(home.includes("Testing. Commissioning. Protection."), "Hero must use the compact discipline-led headline.");
assert(!home.includes("Power-system testing, commissioning and protection."), "Hero must not retain the sentence-style display headline.");
assert(home.includes("Engineering disciplines for controlled power-system delivery."), "Capabilities intro must retain the approved institutional heading.");
assert(home.includes("From engineering review to energization."), "Execution intro must retain the approved process heading.");
assert(home.includes("Engineering power systems since"), "About statement must remain institution-led.");
assert(home.includes("home-final-cta__content"), "Final CTA must retain the single-column content rhythm.");
assert(home.includes('[--hero-canvas:#f4f3ef]'), "Hero blend base must remain locked.");
assert(home.includes('src="/images/home/home-substation-original-1440.jpg"'), "Hero image must remain locked.");
assert(home.includes("linear-gradient(90deg, var(--hero-canvas) 0%, var(--hero-canvas) 8%"), "Desktop Hero blend stops must remain locked.");

assert(capability.includes("supporting-capability-index"), "Supporting capabilities must remain an engineering index.");
assert(!capability.includes("lg:grid-cols-4"), "Supporting capabilities must not regress to a four-card grid.");
assert(execution.includes("execution-process__rail"), "Execution must remain a connected process rail.");
assert(!execution.includes("gap-px border border-[var(--rule)] bg-[var(--rule)]"), "Execution must not regress to a boxed card grid.");

assert(relationships.includes("relationship-marquee__edge-mask"), "Relationship marquee must include deliberate edge treatment for entering and exiting items.");
assert(globals.includes(".relationship-marquee__edge-mask"), "Relationship edge treatment must be defined in the shared stylesheet.");
assert(relationships.includes("text-[1rem] font-semibold"), "Pause/Resume control must meet the refined readability scale.");
assert(!relationships.includes("border border-[var(--rule)] bg-[var(--canvas)] px-4"), "Pause/Resume control must not read as an isolated utility box.");
assert(relationships.includes("aria-pressed={paused}"), "Pause/Resume control must retain explicit pressed state semantics.");

assert(projects.includes('text-[0.84rem] font-semibold uppercase'), "Project metadata labels must meet the final readability floor.");
assert(projects.includes('text-[0.94rem] font-semibold leading-6'), "Secondary project technical metadata must remain enlarged.");
assert(footer.includes('text-[0.84rem] font-semibold uppercase'), "Footer section labels must meet the final readability floor.");
assert(footer.includes('text-[1rem] leading-6 text-white/68'), "Footer legal line must meet the final readability floor.");

assert(!companyScale.includes("absolute inset-x-0 top-0 h-1 bg-[var(--brand-blue)]"), "Company Scale must not duplicate the Power Rail's blue top-rail signature.");

assert(header.includes('sm:w-[70px]'), "Desktop header logo must retain the stronger brand presence.");
assert(header.includes('sm:h-[92px]'), "Header height must support the larger brand mark.");
assert(mobileNav.includes('top-[86px]'), "Mobile navigation must start below the 86px base header.");
assert(mobileNav.includes('sm:top-[92px]'), "Mobile navigation must start below the 92px small-screen header.");
assert(!mobileNav.includes('top-[82px]'), "Mobile navigation must not retain the stale pre-refinement header offset.");

console.log("Home maturity refinement invariants OK.");
