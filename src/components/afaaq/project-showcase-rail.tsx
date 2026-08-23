import Link from "next/link";
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { ProjectMedia } from "@/components/afaaq/project-media";
import { getProjectTechnicalLabel, type Project } from "@/content/projects";

type ProjectShowcaseRailProps = {
  projects: readonly Project[];
  allProjects: readonly Project[];
};

export function ProjectShowcaseRail({ projects, allProjects }: ProjectShowcaseRailProps) {
  if (projects.length === 0) return null;

  return (
    <div className="mt-10 sm:mt-12 md:mt-14">
      <div className="flex items-end justify-between gap-6 border-t border-[var(--rule)] pt-5 sm:pt-6">
        <p className="font-technical m-0 text-[0.8rem] font-medium uppercase leading-5 tracking-[0.08em] text-[var(--muted)] sm:text-[0.82rem]">
          Major Project Portfolio
        </p>
        <span className="hidden h-px max-w-[16rem] flex-1 bg-[var(--rule)] sm:block" aria-hidden="true" />
      </div>

      <div className="mt-5 grid gap-y-9 sm:mt-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-7 xl:gap-x-9">
        {projects.map((project) => {
          const projectIndex = allProjects.findIndex((item) => item.slug === project.slug);
          const projectNumber = String(projectIndex + 1).padStart(2, "0");
          const technicalLabel = getProjectTechnicalLabel(project);

          return (
            <article key={project.slug} className="min-w-0">
              <Link href={`/projects/${project.slug}`} className="group block min-w-0">
                <ProjectMedia
                  project={project}
                  sizes="(max-width: 1023px) calc(100vw - 2.5rem), 31vw"
                  className="aspect-[16/10]"
                  imageClassName="transition-transform duration-500 ease-[var(--ease-standard)] group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
                />

                <div className="border-b border-[var(--rule)] pb-6 pt-5 sm:pb-7 sm:pt-6">
                  <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-2">
                    <p className="font-technical m-0 text-[0.8rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
                      Project {projectNumber}
                    </p>
                    {technicalLabel ? (
                      <p className="font-technical m-0 shrink-0 text-[0.84rem] font-medium text-[var(--muted)]">
                        {technicalLabel}
                      </p>
                    ) : null}
                  </div>

                  <h3 className="mb-0 mt-3 max-w-[19ch] text-[clamp(1.65rem,2.6vw,2.3rem)] font-medium leading-[1.03] tracking-[-0.036em] text-[var(--ink)] transition-colors group-hover:text-[var(--brand-navy)] group-focus-visible:text-[var(--brand-navy)]">
                    {project.name}
                  </h3>

                  {project.relationship ? (
                    <div className="mt-4">
                      <ProjectClientMark name={project.relationship} compact />
                    </div>
                  ) : null}

                  <div className="mt-5 flex items-end justify-between gap-5">
                    <p className="m-0 min-w-0 max-w-[30rem] text-[0.98rem] leading-7 text-[var(--muted)]">
                      {project.scopes.join(" · ")}
                    </p>
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="mb-1 h-4 w-4 shrink-0 transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1 group-focus-visible:translate-x-1" fill="none">
                      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
