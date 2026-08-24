import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const listing = readFileSync(new URL("../src/app/projects/page.tsx", import.meta.url), "utf8");
const detail = readFileSync(new URL("../src/app/projects/[slug]/page.tsx", import.meta.url), "utf8");

assert(!listing.includes("ProjectMedia"), "Projects listing must not render ProjectMedia without authenticated project photography.");
assert(!detail.includes("ProjectMedia"), "Project detail must not render ProjectMedia without authenticated project photography.");
assert(!listing.includes("Project {projectNumber}"), "Projects listing must not use decorative project numbering.");
assert(!detail.includes("Project / {projectNumber}"), "Project detail must not use decorative project numbering.");
assert(detail.includes("ProjectFactsPanel"), "Project detail must use ProjectFactsPanel for factual project evidence.");
assert(!listing.includes("/images/projects/"), "Projects listing must not reference unauthenticated project images.");
assert(!detail.includes("/images/projects/"), "Project detail must not reference unauthenticated project images.");

console.log("Project truth validation passed.");
