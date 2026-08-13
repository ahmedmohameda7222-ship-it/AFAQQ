import Link from "next/link";
import type { Project } from "@/content/projects";

export function SelectedProjects({ projects }: { projects: readonly Project[] }) {
  if (projects.length === 0) return null;

  const visibleProjects = projects.slice(0, 3);

  return (
    <div className="mt-12 grid gap-x-8 gap-y-12 md:mt-16 md:grid-cols-12 md:gap-y-16">
      {visibleProjects.map((project, index) => {
        if (index === 2) {
          return (
            <article key={project.slug} className="md:col-span-12">
              <Link href="/projects" className="group grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
                <div className="project-media-placeholder aspect-[16/10] bg-[#d8d7d1] md:col-span-5" aria-hidden="true" />
                <div className="border-t border-[var(--rule)] pt-4 md:col-span-5 md:col-start-7 md:pb-2">
                  <div className="flex items-start justify-between gap-6">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Project 03</p>
                    <p className="m-0 shrink-0 text-sm font-medium text-[var(--muted)]">{project.voltage.join(" / ")}</p>
                  </div>
                  <h3 className="mb-0 mt-4 max-w-[18ch] text-[clamp(1.6rem,2.8vw,2.5rem)] font-medium leading-[1.02] tracking-[-0.04em]">{project.name}</h3>
                </div>
              </Link>
            </article>
          );
        }

        return (
          <article key={project.slug} className={index === 0 ? "md:col-span-7" : "md:col-span-5"}>
            <Link href="/projects" className="group block">
              <div className={`project-media-placeholder bg-[#d8d7d1] ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`} aria-hidden="true" />
              <div className="mt-5 flex items-start justify-between gap-6 border-t border-[var(--rule)] pt-4">
                <div>
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Project {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mb-0 mt-3 text-[clamp(1.45rem,2.5vw,2.2rem)] font-medium leading-tight tracking-[-0.035em]">{project.name}</h3>
                </div>
                <p className="m-0 shrink-0 text-sm font-medium text-[var(--muted)]">{project.voltage.join(" / ")}</p>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
