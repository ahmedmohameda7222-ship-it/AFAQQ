import { readFileSync } from "node:fs";
import { projects } from "../src/content/projects.ts";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const project of projects) {
  assert(project.image === undefined, `Project ${project.slug} must not define unauthenticated project imagery.`);
  assert(project.imageAlt === undefined, `Project ${project.slug} must not define image alt text without authenticated imagery.`);
  assert(project.imagePosition === undefined, `Project ${project.slug} must not define image positioning without authenticated imagery.`);
}

const dossierSurfaces = [
  "../src/app/page.tsx",
  "../src/components/afaaq/project-showcase-rail.tsx",
];

for (const relativePath of dossierSurfaces) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  assert(!source.includes("ProjectMedia"), `${relativePath} must not use a media-shaped Home project placeholder.`);
}

const innerProjectSurfaces = [
  "../src/app/projects/page.tsx",
  "../src/app/projects/[slug]/page.tsx",
];

for (const relativePath of innerProjectSurfaces) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  assert(source.includes("ProjectMedia"), `${relativePath} must keep the honest image-ready fallback surface.`);
}

console.log(`Project media integrity OK: ${projects.length} projects remain photo-free.`);
