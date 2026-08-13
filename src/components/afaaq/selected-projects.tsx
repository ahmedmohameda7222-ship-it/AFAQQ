import Link from "next/link";
import type { Project } from "@/content/projects";

export function SelectedProjects({ projects }: { projects: readonly Project[] }) {
  if (projects.length === 0) return null;

  return (
    <div className="mt-12 grid gap-x-8 gap-y-14 md:mt-16 md:grid-cols-12 md:gap-y-20">
      {projects.slice(0, 3).map((project, index) => (
        <article
          key={project.slug}
          className={
            index === 0
              ? "md:col-span-7"
              : index === 1
                ? "md:col-span-5 md:pt-20"
                : "md:col-span-5 md:col-start-8"
          }
        >
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
      ))}
    </div>
  );
}
