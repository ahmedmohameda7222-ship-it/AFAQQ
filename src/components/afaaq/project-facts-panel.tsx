import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { getProjectTechnicalLabel, type Project } from "@/content/projects";

type ProjectFactsPanelProps = {
  project: Project;
};

export function ProjectFactsPanel({ project }: ProjectFactsPanelProps) {
  const technicalLabel = getProjectTechnicalLabel(project);
  const locationYear = [project.location, project.year].filter(Boolean).join(" · ");

  return (
    <section
      aria-label={`${project.name} project facts`}
      className="overflow-hidden bg-[var(--surface)]"
    >
      <div className="h-1.5 w-full bg-[var(--brand-blue)]" aria-hidden="true" />
      <div className="grid gap-8 px-6 py-7 sm:px-8 sm:py-9 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-11">
        <div className="min-w-0 lg:col-span-5">
          {technicalLabel ? (
            <p className="font-technical m-0 text-[clamp(1.55rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--brand-navy)]">
              {technicalLabel}
            </p>
          ) : null}
          {locationYear ? (
            <p className="mb-0 mt-4 text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.05rem]">
              {locationYear}
            </p>
          ) : null}
          {project.relationship ? (
            <div className="mt-7">
              <ProjectClientMark name={project.relationship} />
            </div>
          ) : null}
        </div>

        <div className="min-w-0 lg:col-span-7">
          <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[var(--brand-navy)]">
            Project Scope
          </p>
          <ul className="mt-5 grid list-none gap-x-8 gap-y-3 p-0 sm:grid-cols-2">
            {project.scopes.map((scope) => (
              <li key={scope} className="flex items-start gap-3 text-[1rem] font-medium leading-7 text-[var(--ink)] sm:text-[1.05rem]">
                <span className="mt-[0.72rem] h-0.5 w-5 shrink-0 bg-[var(--brand-blue)]" aria-hidden="true" />
                <span>{scope}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
