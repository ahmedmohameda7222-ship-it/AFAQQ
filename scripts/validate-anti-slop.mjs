import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const services = readFileSync(new URL("../src/app/services/page.tsx", import.meta.url), "utf8");
const serviceDetail = readFileSync(new URL("../src/app/services/[slug]/page.tsx", import.meta.url), "utf8");
const about = readFileSync(new URL("../src/app/about/page.tsx", import.meta.url), "utf8");
const projects = readFileSync(new URL("../src/app/projects/page.tsx", import.meta.url), "utf8");
const projectDetail = readFileSync(new URL("../src/app/projects/[slug]/page.tsx", import.meta.url), "utf8");

const homeLabels = (home.match(/<SectionLabel>/g) ?? []).length;
assert(homeLabels <= 3, `Home has ${homeLabels} SectionLabel usages; Designer Skill target is <= 3.`);
assert(!home.includes("Company credentials are presented separately from voltage experience"), "Home must not expose design-rationale copy.");
assert(!services.includes("String(index + 1).padStart"), "Services landing must not use decorative numbering.");
assert(!serviceDetail.includes("String(index + 1).padStart"), "Service details must not use decorative numbering.");
assert(!about.includes("String(index + 1).padStart"), "About must not use decorative Engineering Focus numbering.");
assert(!projects.includes("projectNumber"), "Projects must not use decorative project numbering.");
assert(!projectDetail.includes("projectNumber"), "Project details must not use decorative project numbering.");

console.log("Anti-slop validation passed.");
