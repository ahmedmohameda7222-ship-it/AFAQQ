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

for (const project of projects.filter((item) => item.status === "verified")) {
  assert(Boolean(project.image), `Project ${project.slug} must define an approved project image.`);
  assert(Boolean(project.imageAlt), `Project ${project.slug} must define useful image alt text.`);
}

for (const relativePath of projectSurfaces) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  assert(source.includes("ProjectMedia"), `${relativePath} must render project image media.`);
}

console.log(`Project media presentation OK: ${projects.length} projects use approved imagery.`);
