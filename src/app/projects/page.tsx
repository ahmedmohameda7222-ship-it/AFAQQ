import type { Metadata } from "next";
import Link from "next/link";
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { Container } from "@/components/layout/container";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
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
              <h1 className="font-display mt-5 max-w-4xl text-[clamp(2.55rem,5.4vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.04em] sm:mt-6">
                Project experience across control centers and power infrastructure.
              </h1>
            </div>
            <p className="m-0 max-w-lg text-[1.02rem] leading-7 text-[var(--muted)] md:col-span-4 md:text-[1.05rem] md:leading-8">
              Four verified project references covering regional control centers and solar-power infrastructure across 220 kV, 66 kV, 22 kV, 11 kV and secondary systems.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-28">
        <Container>
          <div className="border-t border-[var(--rule)]">
            {verifiedProjects.map((project) => {
              const projectMeta = [project.location, project.year].filter(Boolean).join(" · ");
              const technicalLabel = getProjectTechnicalLabel(project);

              return (
                <article key={project.slug} className="border-b border-[var(--rule)] py-8 sm:py-9 md:py-11">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group grid min-w-0 gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4 md:grid-cols-12 md:gap-8"
                  >
                    <div className="min-w-0 md:col-span-5">
                      <h2 className="font-display m-0 max-w-[22ch] text-[clamp(1.85rem,3.3vw,3rem)] font-semibold leading-[1.02] tracking-[-0.032em] transition-colors group-hover:text-[var(--brand-navy)] group-focus-visible:text-[var(--brand-navy)]">
                        {project.name}
                      </h2>
                      {project.relationship ? (
                        <div className="mt-5">
                          <ProjectClientMark name={project.relationship} />
                        </div>
                      ) : null}
                    </div>

                    <div className="min-w-0 md:col-span-3">
                      {technicalLabel ? (
                        <p className="font-technical m-0 text-[0.96rem] font-semibold leading-6 text-[var(--brand-navy)] sm:text-[1rem]">
                          {technicalLabel}
                        </p>
                      ) : null}
                      {projectMeta ? (
                        <p className="mb-0 mt-3 text-[0.96rem] leading-6 text-[var(--muted)]">
                          {projectMeta}
                        </p>
                      ) : null}
                    </div>

                    <div className="min-w-0 md:col-span-4">
                      <p className="m-0 max-w-[34rem] text-[0.98rem] leading-7 text-[var(--muted)]">
                        {project.scopes.join(" · ")}
                      </p>
                      <span className="mt-5 inline-flex min-h-11 items-center gap-3 text-[0.94rem] font-semibold text-[var(--brand-navy)]">
                        <span>View Project Scope</span>
                        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1 group-focus-visible:translate-x-1" fill="none">
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

      <section className="bg-[var(--brand-deep-navy)] py-16 text-white sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-8">
              <SectionLabel>Project Inquiry</SectionLabel>
              <h2 className="font-display mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.04em] sm:mt-6">
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
