import Link from "next/link";
import type { Project } from "@/content/projects";

type SelectedProjectsProps = {
  projects: readonly Project[];
  startIndex?: number;
};

export function SelectedProjects({ projects, startIndex = 1 }: SelectedProjectsProps) {
  if (projects.length === 0) return null;

  const visibleProjects = projects.slice(0, 3);

  return (
    <div className="mt-10 grid gap-x-8 gap-y-10 md:mt-12 md:grid-cols-12 md:gap-y-14">
      {visibleProjects.map((project, index) => {
        const projectNumber = String(startIndex + index).padStart(2, "0");
        const projectHref = `/projects/${project.slug}`;

        if (index === 2) {
          return (
            <article key={project.slug} className="md:col-span-12">
              <Link href={projectHref} className="group grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
                <div className="project-media-placeholder aspect-[16/10] bg-[#d8d7d1] md:col-span-5" aria-hidden="true" />
                <div className="border-t border-[var(--rule)] pt-4 md:col-span-5 md:col-start-7 md:pb-2">
                  <div className="flex items-start justify-between gap-6">
                    <p className="font-technical m-0 text-[0.78rem] font-medium uppercase leading-5 tracking-[0.08em] text-[var(--muted)]">Project {projectNumber}</p>
                    <p className="font-technical m-0 shrink-0 text-[0.82rem] font-medium leading-5 text-[var(--muted)]">{project.voltage.join(" / ")}</p>
                  </div>
                  <h3 className="mb-0 mt-3 max-w-[20ch] text-[clamp(1.55rem,2.6vw,2.3rem)] font-medium leading-[1.06] tracking-[-0.03em]">{project.name}</h3>
                </div>
              </Link>
            </article>
          );
        }

        return (
          <article key={project.slug} className={index === 0 ? "md:col-span-7" : "md:col-span-5"}>
            <Link href={projectHref} className="group block">
              <div className={`project-media-placeholder bg-[#d8d7d1] ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`} aria-hidden="true" />
              <div className="mt-5 flex items-start justify-between gap-6 border-t border-[var(--rule)] pt-4">
                <div>
                  <p className="font-technical m-0 text-[0.78rem] font-medium uppercase leading-5 tracking-[0.08em] text-[var(--muted)]">Project {projectNumber}</p>
                  <h3 className="mb-0 mt-3 text-[clamp(1.4rem,2.3vw,2rem)] font-medium leading-[1.08] tracking-[-0.03em]">{project.name}</h3>
                </div>
                <p className="font-technical m-0 shrink-0 text-[0.82rem] font-medium leading-5 text-[var(--muted)]">{project.voltage.join(" / ")}</p>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
