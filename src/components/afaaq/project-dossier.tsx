import Link from "next/link";
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { getProjectTechnicalLabel, type Project } from "@/content/projects";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function TechnicalGuide() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span className="absolute inset-x-0 top-[28%] border-t border-white/10" />
      <span className="absolute inset-x-0 top-[64%] border-t border-white/10" />
      <span className="absolute bottom-0 left-[18%] top-0 border-l border-white/[0.07]" />
      <span className="absolute bottom-0 left-[72%] top-0 border-l border-white/[0.05]" />
      <span className="absolute left-6 top-[28%] h-2 w-2 -translate-y-1/2 border border-white/25 sm:left-8 lg:left-10" />
      <span className="absolute bottom-8 right-8 h-2 w-2 border border-white/30" />
      <span className="font-technical absolute right-8 top-8 text-[0.64rem] uppercase tracking-[0.16em] text-white/24">
        SYS / REF
      </span>
    </div>
  );
}

export function FeaturedProjectDossier({
  project,
  projectNumber,
}: {
  project: Project;
  projectNumber: string;
}) {
  const technicalLabel = getProjectTechnicalLabel(project);
  const locationYear = [project.location, project.year].filter(Boolean).join(" · ");

  return (
    <article className="mt-8 overflow-hidden border-y border-[var(--rule)] sm:mt-10 md:mt-12">
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-[22rem] overflow-hidden bg-[var(--graphite)] p-6 text-[var(--canvas)] sm:min-h-[25rem] sm:p-8 md:col-span-7 md:min-h-[32rem] md:border-r md:border-[var(--rule)] lg:p-10">
          <TechnicalGuide />
          <div className="relative z-10 flex h-full flex-col justify-between gap-12">
            <div className="flex items-start justify-between gap-5">
              <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-white/58">
                Project Ref / {projectNumber}
              </p>
              {technicalLabel ? (
                <p className="font-technical m-0 max-w-[54%] text-right text-[0.8rem] font-medium leading-5 text-white/64">
                  {technicalLabel}
                </p>
              ) : null}
            </div>

            <div>
              <p className="font-technical m-0 text-[0.72rem] uppercase tracking-[0.1em] text-white/48">
                AFAAQ ARAB / Major Project
              </p>
              <h3 className="mb-0 mt-4 max-w-[16ch] text-[clamp(2.45rem,5vw,4.8rem)] font-medium leading-[0.94] tracking-[-0.052em]">
                {project.name}
              </h3>
              {locationYear ? (
                <p className="font-technical mb-0 mt-6 text-[0.82rem] leading-5 text-white/60">
                  {locationYear}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="min-w-0 border-t border-[var(--rule)] py-7 sm:py-8 md:col-span-5 md:border-t-0 md:pl-8 md:py-9 lg:pl-10">
          {project.relationship ? (
            <div>
              <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.09em] text-[var(--muted)]">
                Project Relationship
              </p>
              <div className="mt-4">
                <ProjectClientMark name={project.relationship} />
              </div>
            </div>
          ) : null}

          <div className="mt-8 border-t border-[var(--rule)] pt-6">
            <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.09em] text-[var(--muted)]">
              Scope
            </p>
            <ul className="mt-5 grid list-none gap-3 p-0">
              {project.scopes.map((scope) => (
                <li key={scope} className="grid grid-cols-[auto_1fr] gap-3 text-[1.02rem] leading-7 text-[var(--ink)]">
                  <span className="mt-[0.72rem] h-px w-4 bg-[var(--brand-blue)]" aria-hidden="true" />
                  <span>{scope}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-[var(--rule)] pt-6">
            <Link
              href={`/projects/${project.slug}`}
              className="group inline-flex min-h-12 items-center gap-3 text-[0.98rem] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4"
            >
              <span>View Full Project Scope</span>
              <span className="transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1 group-focus-visible:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectDossierRecord({
  project,
  projectNumber,
}: {
  project: Project;
  projectNumber: string;
}) {
  const technicalLabel = getProjectTechnicalLabel(project);
  const locationYear = [project.location, project.year].filter(Boolean).join(" · ");

  return (
    <article className="group min-w-0 border-t border-[var(--rule)] py-6 sm:py-7 lg:py-8">
      <Link
        href={`/projects/${project.slug}`}
        className="block min-h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4"
      >
        <div className="flex items-start justify-between gap-5">
          <p className="font-technical m-0 text-[0.76rem] font-medium uppercase tracking-[0.09em] text-[var(--muted)]">
            Project {projectNumber}
          </p>
          {technicalLabel ? (
            <p className="font-technical m-0 max-w-[55%] text-right text-[0.8rem] font-medium leading-5 text-[var(--muted)]">
              {technicalLabel}
            </p>
          ) : null}
        </div>

        <h3 className="mb-0 mt-5 max-w-[18ch] text-[clamp(1.85rem,2.8vw,2.5rem)] font-medium leading-[1] tracking-[-0.04em] text-[var(--ink)] transition-colors group-hover:text-[var(--brand-navy)] group-focus-visible:text-[var(--brand-navy)]">
          {project.name}
        </h3>

        {project.relationship ? (
          <div className="mt-5">
            <ProjectClientMark name={project.relationship} compact />
          </div>
        ) : null}

        {locationYear ? (
          <p className="font-technical mb-0 mt-5 text-[0.78rem] leading-5 text-[var(--muted)]">
            {locationYear}
          </p>
        ) : null}

        <div className="mt-5 flex items-end justify-between gap-5 border-t border-[var(--rule)] pt-5">
          <p className="m-0 max-w-[28rem] text-[0.98rem] leading-7 text-[var(--muted)]">
            {project.scopes.join(" · ")}
          </p>
          <span className="mb-1 transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1 group-focus-visible:translate-x-1">
            <ArrowIcon />
          </span>
        </div>
      </Link>
    </article>
  );
}
