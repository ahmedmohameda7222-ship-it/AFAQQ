import Link from "next/link";
import { getProjectTechnicalLabel, type Project } from "@/content/projects";
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";

type ProjectShowcaseRailProps = {
  projects: readonly Project[];
  allProjects: readonly Project[];
};

export function ProjectShowcaseRail({ projects, allProjects }: ProjectShowcaseRailProps) {
  if (projects.length === 0) return null;

  return (
    <div className="mt-8 sm:mt-10 md:mt-12">
      <div className="border-t border-[var(--rule)] pt-5 sm:pt-6">
        <p className="font-technical m-0 text-[0.8rem] font-medium uppercase leading-5 tracking-[0.08em] text-[var(--muted)] sm:text-[0.82rem]">
          Major Project Portfolio
        </p>
      </div>

      <div className="mt-5 grid border-t border-[var(--rule)] sm:mt-6 lg:grid-cols-3">
        {projects.map((project) => {
          const projectIndex = allProjects.findIndex((item) => item.slug === project.slug);
          const projectNumber = String(projectIndex + 1).padStart(2, "0");
          const technicalLabel = getProjectTechnicalLabel(project);

          return (
            <article
              key={project.slug}
              className="min-w-0 border-b border-[var(--rule)] lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full min-h-[17rem] min-w-0 flex-col py-6 transition-colors sm:py-7 lg:px-6 lg:py-8 lg:first:pl-0 lg:last:pr-0"
              >
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

                <h3 className="mb-0 mt-4 max-w-[18ch] text-[clamp(1.6rem,2.6vw,2.25rem)] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--ink)] transition-colors group-hover:text-[var(--brand-navy)] group-focus-visible:text-[var(--brand-navy)]">
                  {project.name}
                </h3>

                {project.relationship ? (
                  <div className="mt-5">
                    <ProjectClientMark name={project.relationship} compact />
                  </div>
                ) : null}

                <p className="mb-0 mt-5 text-[0.98rem] leading-7 text-[var(--muted)]">
                  {project.scopes.join(" · ")}
                </p>

                <div className="mt-auto flex justify-end pt-7">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1 group-focus-visible:translate-x-1" fill="none">
                    <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
