import Link from "next/link";
import { getProjectTechnicalLabel, type Project } from "@/content/projects";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <dt className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
      {children}
    </dt>
  );
}

function FlagshipProjectReference({ project }: { project: Project }) {
  const technicalLabel = getProjectTechnicalLabel(project);

  return (
    <article className="relative overflow-hidden border border-[var(--rule)] bg-white">
      <div className="h-1.5 w-full bg-[var(--brand-blue)]" aria-hidden="true" />
      <div className="grid lg:grid-cols-12">
        <div className="bg-[var(--brand-deep-navy)] p-7 text-white sm:p-9 lg:col-span-5 lg:p-10 xl:p-12">
          <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-white/72">
            Flagship Project Reference
          </p>
          <h3 className="font-display mb-0 mt-5 max-w-[13ch] text-[clamp(2.35rem,4.4vw,4.35rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            {project.name}
          </h3>
          {project.relationship ? (
            <div className="mt-8 border-t border-white/18 pt-5">
              <p className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/64">
                Project Relationship
              </p>
              <p className="mb-0 mt-2 text-[1.2rem] font-semibold leading-7 text-white sm:text-[1.32rem]">
                {project.relationship}
              </p>
            </div>
          ) : null}
        </div>

        <div className="min-w-0 p-7 sm:p-9 lg:col-span-7 lg:p-10 xl:p-12">
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {technicalLabel ? (
              <div>
                <MetaLabel>{project.voltage.length ? "System Voltage" : "Technical Profile"}</MetaLabel>
                <dd className="font-technical mb-0 ml-0 mt-2 text-[1.02rem] font-semibold leading-6 text-[var(--ink)]">
                  {technicalLabel}
                </dd>
              </div>
            ) : null}
            {project.location ? (
              <div>
                <MetaLabel>Location</MetaLabel>
                <dd className="mb-0 ml-0 mt-2 text-[1.02rem] font-medium leading-6 text-[var(--ink)]">
                  {project.location}
                </dd>
              </div>
            ) : null}
            {project.year ? (
              <div>
                <MetaLabel>Year</MetaLabel>
                <dd className="font-technical mb-0 ml-0 mt-2 text-[1rem] font-semibold leading-6 text-[var(--ink)]">
                  {project.year}
                </dd>
              </div>
            ) : null}
          </dl>

          <div className="mt-8 border-t border-[var(--rule)] pt-6">
            <p className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
              Scope
            </p>
            <ul className="mt-4 grid list-none gap-x-8 gap-y-3 p-0 sm:grid-cols-2">
              {project.scopes.map((scope) => (
                <li key={scope} className="flex items-start gap-3 text-[1.02rem] font-medium leading-7 text-[var(--ink)]">
                  <span className="mt-[0.72rem] h-0.5 w-5 shrink-0 bg-[var(--brand-blue)]" aria-hidden="true" />
                  <span>{scope}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="group mt-8 inline-flex min-h-12 items-center gap-3 font-semibold text-[var(--brand-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4"
          >
            <span>View project scope</span>
            <span className="transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1 group-focus-visible:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProjectReferenceRow({ project }: { project: Project }) {
  const technicalLabel = getProjectTechnicalLabel(project);
  const locationYear = [project.location, project.year].filter(Boolean).join(" · ");

  return (
    <article className="border-t border-[var(--rule)] last:border-b">
      <Link
        href={`/projects/${project.slug}`}
        className="group grid min-h-12 gap-5 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4 sm:py-8 lg:grid-cols-12 lg:items-start lg:gap-8"
      >
        <div className="min-w-0 lg:col-span-5">
          <h3 className="font-display m-0 max-w-[22ch] text-[clamp(1.75rem,2.6vw,2.45rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--ink)] transition-colors group-hover:text-[var(--brand-navy)] group-focus-visible:text-[var(--brand-navy)]">
            {project.name}
          </h3>
          {project.relationship ? (
            <p className="mb-0 mt-3 text-[1rem] font-semibold leading-6 text-[var(--brand-navy)]">
              {project.relationship}
            </p>
          ) : null}
        </div>

        <div className="min-w-0 lg:col-span-3">
          {technicalLabel ? (
            <p className="font-technical m-0 text-[0.86rem] font-semibold leading-6 text-[var(--ink)]">
              {technicalLabel}
            </p>
          ) : null}
          {locationYear ? (
            <p className="mb-0 mt-2 text-[0.96rem] leading-6 text-[var(--muted)]">
              {locationYear}
            </p>
          ) : null}
        </div>

        <div className="min-w-0 lg:col-span-4">
          <div className="flex items-end justify-between gap-5">
            <p className="m-0 max-w-[31rem] text-[0.98rem] leading-7 text-[var(--muted)]">
              {project.scopes.join(" · ")}
            </p>
            <span className="mb-1 shrink-0 text-[var(--brand-navy)] transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1 group-focus-visible:translate-x-1">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

type ProjectReferenceBoardProps = {
  projects: readonly Project[];
};

export function ProjectReferenceBoard({ projects }: ProjectReferenceBoardProps) {
  if (projects.length === 0) return null;

  const [featured, ...secondary] = projects;

  return (
    <div className="mt-10 sm:mt-12 md:mt-14">
      <FlagshipProjectReference project={featured} />
      {secondary.length ? (
        <div className="mt-8 sm:mt-10">
          <div className="mb-4 flex items-center gap-5 sm:mb-5">
            <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
              Additional Project References
            </p>
            <span className="h-px flex-1 bg-[var(--rule)]" aria-hidden="true" />
          </div>
          {secondary.map((project) => (
            <ProjectReferenceRow key={project.slug} project={project} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
