import { projects } from "../src/content/projects.ts";
import { services } from "../src/content/services.ts";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function unique(values, label) {
  const seen = new Set();
  for (const value of values) {
    assert(!seen.has(value), `Duplicate ${label}: ${value}`);
    seen.add(value);
  }
}

unique(projects.map((project) => project.slug), "project slug");
unique(services.map((service) => service.slug), "service slug");

const projectSlugs = new Set(projects.map((project) => project.slug));

for (const project of projects) {
  assert(project.name.trim(), `Project ${project.slug} is missing a name.`);
  assert(project.summary.trim(), `Project ${project.slug} is missing a summary.`);
  assert(project.image.trim(), `Project ${project.slug} is missing an image.`);
  assert(project.voltage.length > 0, `Project ${project.slug} is missing a voltage/system level.`);
  assert(project.scopes.length > 0, `Project ${project.slug} is missing scope data.`);
  assert(["verified", "pending"].includes(project.status), `Project ${project.slug} has an invalid status.`);
}

assert(projects.filter((project) => project.latest).length <= 1, "Only one project can be marked latest.");

for (const service of services) {
  assert(service.title.trim(), `Service ${service.slug} is missing a title.`);
  assert(service.summary.trim(), `Service ${service.slug} is missing a summary.`);
  assert(service.intro.trim(), `Service ${service.slug} is missing intro copy.`);
  assert(service.capabilities.length > 0, `Service ${service.slug} is missing capabilities.`);
  assert(["verified", "pending"].includes(service.status), `Service ${service.slug} has an invalid status.`);

  for (const projectSlug of service.relatedProjectSlugs) {
    assert(projectSlugs.has(projectSlug), `Service ${service.slug} links to missing project ${projectSlug}.`);
  }
}

console.log(`Content integrity OK: ${services.length} services, ${projects.length} projects.`);
