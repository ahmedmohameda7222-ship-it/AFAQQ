import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { ProjectMedia } from "@/components/afaaq/project-media";
import { verifiedProjects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "AFAAQ ARAB major project experience across 220 kV, 66 kV and medium-voltage systems, including testing, commissioning, protection, control, SCADA and electrical works.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="pb-16 pt-14 md:pb-20 md:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionLabel>Major Projects</SectionLabel>
              <h1 className="mt-6 max-w-4xl text-[clamp(2.8rem,5.4vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                Project experience across transmission, distribution and control systems.
              </h1>
            </div>
            <p className="m-0 max-w-lg text-[1.05rem] leading-8 text-[var(--muted)] md:col-span-4">
              Seven AFAAQ ARAB references across 220 kV, 66 kV and medium-voltage environments, covering protection, SCADA, electrical works, testing and commissioning.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 border-y border-[var(--rule)] md:mt-14">
            <div className="py-6 pr-2 sm:pr-4 md:py-7">
              <p className="font-technical m-0 text-[clamp(1.7rem,3vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">
                {String(verifiedProjects.length).padStart(2, "0")}
              </p>
              <p className="font-technical mb-0 mt-2 text-[0.78rem] uppercase leading-5 tracking-[0.08em] text-[var(--muted)]">Major projects</p>
            </div>
            <div className="border-x border-[var(--rule)] px-2 py-6 sm:px-4 md:px-7 md:py-7">
              <p className="font-technical m-0 text-[clamp(0.8rem,3vw,2.2rem)] font-medium leading-none tracking-[-0.035em]">11 / 66 / 220 kV</p>
              <p className="font-technical mb-0 mt-2 text-[0.78rem] uppercase leading-5 tracking-[0.08em] text-[var(--muted)]">System levels</p>
            </div>
            <div className="py-6 pl-2 sm:pl-4 md:py-7 md:pl-7">
              <p className="font-technical m-0 text-[clamp(1.7rem,3vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">MV</p>
              <p className="font-technical mb-0 mt-2 text-[0.78rem] uppercase leading-5 tracking-[0.08em] text-[var(--muted)]">Distribution work</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="border-t border-[var(--rule)]">
            {verifiedProjects.map((project, index) => {
              const projectNumber = String(index + 1).padStart(2, "0");
              const projectMeta = [project.location, project.year].filter(Boolean).join(" · ");

              return (
                <article key={project.slug} className="border-b border-[var(--rule)] py-8 md:py-10">
                  <Link href={`/projects/${project.slug}`} className="group grid gap-7 md:grid-cols-12 md:items-center md:gap-8">
                    <ProjectMedia
                      project={project}
                      priority={index === 0}
                      className="aspect-[16/10] md:col-span-4"
                      imageClassName="transition-transform duration-500 group-hover:scale-[1.015]"
                    />

                    <div className="md:col-span-5">
                      <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
                        Project {projectNumber}
                      </p>
                      <h2 className="mb-0 mt-3 text-[clamp(1.85rem,3.2vw,2.9rem)] font-medium leading-[1.02] tracking-[-0.04em] group-hover:text-[var(--brand-navy)]">
                        {project.name}
                      </h2>

                      {project.relationship ? (
                        <div className="mt-4">
                          <ProjectClientMark name={project.relationship} />
                        </div>
                      ) : null}

                      <p className="mb-0 mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--muted)]">
                        {project.scopes.join(" · ")}
                      </p>
                    </div>

                    <div className="flex items-end justify-between gap-6 md:col-span-3 md:h-full md:flex-col md:items-end md:justify-between md:py-1 md:text-right">
                      <div>
                        <p className="font-technical m-0 text-[1rem] font-medium text-[var(--ink)]">{project.voltage.join(" / ")}</p>
                        {projectMeta ? (
                          <p className="font-technical mb-0 mt-2 text-[0.78rem] leading-5 text-[var(--muted)]">{projectMeta}</p>
                        ) : null}
                      </div>
                      <span className="inline-flex items-center gap-3 text-[0.9rem] font-medium">
                        View Project Scope
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

      <section className="bg-[var(--graphite)] py-20 text-[var(--canvas)] md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionLabel>Project Inquiry</SectionLabel>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.35rem,5vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                Have a project scope at MV, 66 kV or 220 kV?
              </h2>
            </div>
            <div className="md:col-span-4">
              <PrimaryAction href="/contact" tone="light">Discuss a Project Scope</PrimaryAction>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
