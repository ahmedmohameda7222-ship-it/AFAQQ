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

const projectSurfaces = [
  "../src/app/page.tsx",
  "../src/components/afaaq/project-reference-board.tsx",
  "../src/app/projects/page.tsx",
  "../src/app/projects/[slug]/page.tsx",
];

for (const relativePath of projectSurfaces) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  assert(!source.includes("ProjectMedia"), `${relativePath} must not render a media-shaped project placeholder.`);
  assert(!source.includes("/images/projects/"), `${relativePath} must not render unauthenticated project photography.`);
  assert(!source.includes("drcc.jpg"), `${relativePath} must not treat repository DRCC imagery as authenticated project evidence.`);
  assert(!source.includes("crcc.jpg"), `${relativePath} must not treat repository CRCC imagery as authenticated project evidence.`);
  assert(!source.includes("rcc.jpg"), `${relativePath} must not treat repository RCC imagery as authenticated project evidence.`);
  assert(!source.includes("benban.jpg"), `${relativePath} must not treat repository Benban imagery as authenticated project evidence.`);
}

const projectBoard = readFileSync(new URL("../src/components/afaaq/project-reference-board.tsx", import.meta.url), "utf8");
assert(!projectBoard.includes('"use client"'), "Home project references must remain server-rendered.");

console.log(`Project media integrity OK: ${projects.length} verified project records remain image-independent.`);
