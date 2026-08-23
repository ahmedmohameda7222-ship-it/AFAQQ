import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { getProjectTechnicalLabel, verifiedProjects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "AFAAQ ARAB major project experience across 220 kV, 66 kV, 22 kV and 11 kV control-center systems and solar-power infrastructure, including testing, commissioning, protection, control and secondary systems.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="pb-14 pt-12 sm:pb-16 sm:pt-14 md:pb-20 md:pt-20">
        <Container>
          <div className="grid gap-7 sm:gap-10 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-8">
              <SectionLabel>Major Projects</SectionLabel>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.55rem,5.4vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.045em] sm:mt-6">
                Project experience across control centers and power infrastructure.
              </h1>
            </div>
            <p className="m-0 max-w-lg text-[1.02rem] leading-7 text-[var(--muted)] md:col-span-4 md:text-[1.05rem] md:leading-8">
              Four AFAAQ ARAB project references covering regional control centers and solar-power infrastructure, including 220 kV, 66 kV, 22 kV, 11 kV and secondary control systems.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 border-y border-[var(--rule)] sm:mt-12 sm:grid-cols-3 md:mt-14">
            <div className="border-r border-[var(--rule)] py-5 pr-4 md:py-7">
              <p className="font-technical m-0 text-[clamp(1.7rem,3vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">
                {String(verifiedProjects.length).padStart(2, "0")}
              </p>
              <p className="font-technical mb-0 mt-2 text-[0.72rem] uppercase leading-5 tracking-[0.06em] text-[var(--muted)] sm:text-[0.78rem] sm:tracking-[0.08em]">Major projects</p>
            </div>
            <div className="px-4 py-5 sm:border-r sm:border-[var(--rule)] md:px-7 md:py-7">
              <p className="font-technical m-0 text-[clamp(0.9rem,3vw,2.2rem)] font-medium leading-tight tracking-[-0.025em] sm:leading-none sm:tracking-[-0.035em]">220 / 66 / 22 / 11 kV</p>
              <p className="font-technical mb-0 mt-2 text-[0.72rem] uppercase leading-5 tracking-[0.06em] text-[var(--muted)] sm:text-[0.78rem] sm:tracking-[0.08em]">System levels</p>
            </div>
            <div className="col-span-2 border-t border-[var(--rule)] py-5 sm:col-span-1 sm:border-t-0 sm:pl-4 md:py-7 md:pl-7">
              <p className="font-technical m-0 text-[clamp(1.7rem,3vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">Solar</p>
              <p className="font-technical mb-0 mt-2 text-[0.72rem] uppercase leading-5 tracking-[0.06em] text-[var(--muted)] sm:text-[0.78rem] sm:tracking-[0.08em]">Power plant project</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-28">
        <Container>
          <div className="border-t border-[var(--rule)]">
            {verifiedProjects.map((project, index) => {
              const projectNumber = String(index + 1).padStart(2, "0");
              const projectMeta = [project.location, project.year].filter(Boolean).join(" · ");
              const technicalLabel = getProjectTechnicalLabel(project);

              return (
                <article key={project.slug} className="border-b border-[var(--rule)] py-7 sm:py-8 md:py-10">
                  <Link href={`/projects/${project.slug}`} className="group grid min-w-0 gap-6 sm:gap-7 md:grid-cols-12 md:items-start md:gap-8">
                    <div className="min-w-0 md:col-span-8">
                      <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
                        Project {projectNumber}
                      </p>
                      <h2 className="mb-0 mt-3 text-[clamp(1.8rem,3.2vw,2.9rem)] font-medium leading-[1.03] tracking-[-0.035em] group-hover:text-[var(--brand-navy)] sm:tracking-[-0.04em]">
                        {project.name}
                      </h2>

                      {project.relationship ? (
                        <div className="mt-4">
                          <ProjectClientMark name={project.relationship} />
                        </div>
                      ) : null}

                      <p className="mb-0 mt-4 max-w-2xl text-[0.96rem] leading-7 text-[var(--muted)] sm:mt-5 sm:text-[0.98rem]">
                        {project.scopes.join(" · ")}
                      </p>
                    </div>

                    <div className="flex min-w-0 flex-col items-start gap-4 md:col-span-4 md:h-full md:items-end md:justify-between md:gap-6 md:py-1 md:text-right">
                      <div className="min-w-0">
                        {technicalLabel ? (
                          <p className="font-technical m-0 text-[0.95rem] font-medium text-[var(--ink)] sm:text-[1rem]">{technicalLabel}</p>
                        ) : null}
                        {projectMeta ? (
                          <p className="font-technical mb-0 mt-2 text-[0.78rem] leading-5 text-[var(--muted)]">{projectMeta}</p>
                        ) : null}
                      </div>
                      <span className="inline-flex min-h-12 items-center gap-3 text-[0.9rem] font-medium">
                        <span>View Project Scope</span>
                        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1" fill="none">
                          <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-16 text-[var(--canvas)] sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-8">
              <SectionLabel>Project Inquiry</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.045em] sm:mt-6">
                Have a control-center, testing or electrical project scope?
              </h2>
            </div>
            <div className="min-w-0 md:col-span-4">
              <PrimaryAction href="/contact" tone="light">Discuss a Project Scope</PrimaryAction>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
