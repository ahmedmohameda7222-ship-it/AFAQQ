import { ProjectDossierRecord } from "@/components/afaaq/project-dossier";
import type { Project } from "@/content/projects";

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

      <div className="mt-6 grid gap-x-7 gap-y-0 border-b border-[var(--rule)] lg:grid-cols-3 xl:gap-x-9">
        {projects.map((project) => {
          const projectIndex = allProjects.findIndex((item) => item.slug === project.slug);
          const projectNumber = String(projectIndex + 1).padStart(2, "0");

          return (
            <ProjectDossierRecord
              key={project.slug}
              project={project}
              projectNumber={projectNumber}
            />
          );
        })}
      </div>
    </div>
  );
}
