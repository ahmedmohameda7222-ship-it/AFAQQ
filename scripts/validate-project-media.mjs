import { readFileSync } from "node:fs";
import { projects } from "../src/content/projects.ts";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const projectSurfaces = [
  "../src/app/page.tsx",
  "../src/app/projects/page.tsx",
  "../src/app/projects/[slug]/page.tsx",
  "../src/components/afaaq/project-showcase-rail.tsx",
];

for (const relativePath of projectSurfaces) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  assert(!source.includes("ProjectMedia"), `${relativePath} must not render project image media.`);
}

for (const project of projects) {
  assert(project.image === undefined, `Project ${project.slug} must not define an image.`);
  assert(project.imageAlt === undefined, `Project ${project.slug} must not define image alt text.`);
  assert(project.imagePosition === undefined, `Project ${project.slug} must not define image positioning.`);
}

console.log(`Project media removal OK: ${projects.length} projects are text-only.`);
