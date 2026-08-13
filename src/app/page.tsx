import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { AboutBrandArtwork } from "@/components/afaaq/about-brand-artwork";
import { ExecutionTrack } from "@/components/afaaq/execution-track";
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { ProjectMedia } from "@/components/afaaq/project-media";
import { ProjectShowcaseRail } from "@/components/afaaq/project-showcase-rail";
import { RelationshipRail } from "@/components/afaaq/relationship-rail";
import { ServiceIndex } from "@/components/afaaq/service-index";
import { clients } from "@/content/company";
import { verifiedProjects } from "@/content/projects";

const disciplines = [
  "Testing & Commissioning",
  "Protection & Control",
  "SCADA / RTU Integration",
] as const;

const latestProject = verifiedProjects.find((project) => project.latest) ?? verifiedProjects[0];
const projectRail = latestProject ? verifiedProjects.filter((project) => project.slug !== latestProject.slug) : verifiedProjects;

export default function HomePage() {
  const latestIndex = latestProject ? verifiedProjects.findIndex((project) => project.slug === latestProject.slug) : -1;
  const latestNumber = latestIndex >= 0 ? String(latestIndex + 1).padStart(2, "0") : "01";

  return (
    <>
      <section className="overflow-hidden pb-14 pt-7 sm:pb-16 sm:pt-10 md:pb-20 md:pt-12 lg:pt-14">
        <Container>
          <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7 lg:pt-4">
              <SectionLabel>Electrical Engineering & Contracting</SectionLabel>

              <h1 className="mt-5 max-w-[740px] text-[clamp(2.6rem,4.8vw,4.25rem)] font-medium leading-[0.99] tracking-[-0.042em] text-[var(--ink)] sm:mt-6">
                Electrical testing, commissioning and protection for power systems.
              </h1>

              <p className="mt-6 max-w-[42rem] text-[1.03rem] leading-7 text-[var(--muted)] sm:mt-7 md:text-[1.13rem] md:leading-8">
                AFAAQ ARAB supports utilities, EPC contractors and power-system teams across substations and control infrastructure, from electrical installation and system integration through testing, energization and handover.
              </p>

              <div className="mt-7 flex flex-col items-stretch gap-2 sm:mt-8 sm:flex-row sm:items-center sm:gap-7">
                <PrimaryAction href="/contact">Discuss a Project Scope</PrimaryAction>
                <ArrowLink href="/projects">View Our Projects</ArrowLink>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <div
                className="hero-media-placeholder relative aspect-[4/3] overflow-hidden bg-[var(--graphite)] sm:aspect-[16/10] lg:aspect-[4/5] lg:min-h-[32rem]"
                aria-label="AFAAQ project photography placeholder"
                role="img"
              >
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/28 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="border-t border-[var(--rule)] pt-7 md:pt-8">
            <SectionLabel>Power System Experience</SectionLabel>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 md:mt-12 md:gap-8">
              {[
                ["11", "kV"],
                ["66", "kV"],
                ["220", "kV"],
              ].map(([value, unit]) => (
                <div key={value} className="min-w-0 border-r border-[var(--rule)] pr-1 last:border-r-0 sm:pr-0">
                  <div className="flex items-end gap-1 sm:gap-1.5">
                    <span className="font-technical text-[clamp(2.25rem,5.4vw,4.35rem)] font-medium leading-none tracking-[-0.045em]">{value}</span>
                    <span className="font-technical mb-1 text-[0.72rem] font-medium uppercase tracking-[0.06em] text-[var(--muted)] sm:text-[0.78rem] md:mb-2">{unit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-2.5 border-t border-[var(--rule)] pt-5 sm:mt-8 sm:gap-3 sm:pt-6 md:mt-10 md:grid-cols-3 md:gap-8 md:pt-7">
              {disciplines.map((discipline) => (
                <p key={discipline} className="m-0 text-[0.95rem] font-medium leading-6 tracking-[-0.01em] md:text-[1rem]">
                  {discipline}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {latestProject ? (
        <section className="pb-16 sm:pb-20 md:pb-28">
          <Container>
            <div className="border-t border-[var(--rule)] pt-7 sm:pt-8 md:pt-9">
              <div className="grid gap-5 sm:gap-6 md:grid-cols-12 md:items-end">
                <div className="min-w-0 md:col-span-7">
                  <SectionLabel>Major Projects</SectionLabel>
                  <h2 className="mt-5 max-w-3xl text-[clamp(2rem,3.9vw,3.55rem)] font-medium leading-[1.02] tracking-[-0.04em] sm:mt-6">
                    Seven project references across transmission, distribution and control systems.
                  </h2>
                </div>
                <div className="md:col-span-3 md:col-start-10">
                  <ArrowLink href="/projects">View All Projects</ArrowLink>
                </div>
              </div>

              <article className="mt-8 grid gap-7 border-t border-[var(--rule)] pt-7 sm:mt-10 sm:gap-8 sm:pt-8 md:mt-12 md:grid-cols-12 md:gap-10 md:pt-10">
                <div className="min-w-0 md:col-span-7">
                  <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
                    <p className="font-technical m-0 text-[0.75rem] font-medium uppercase leading-5 tracking-[0.08em] text-[var(--muted)] sm:text-[0.78rem]">
                      Latest Project Reference / {latestNumber}
                    </p>
                    <p className="font-technical m-0 shrink-0 text-[0.82rem] font-medium text-[var(--muted)]">{latestProject.voltage.join(" / ")}</p>
                  </div>
                  <h3 className="mt-4 max-w-3xl text-[clamp(2.15rem,4.4vw,3.9rem)] font-medium leading-[1] tracking-[-0.042em] sm:mt-5">
                    {latestProject.name}
                  </h3>
                  <ProjectMedia
                    project={latestProject}
                    priority
                    sizes="(max-width: 767px) calc(100vw - 2.5rem), 58vw"
                    className="mt-7 aspect-[4/3] sm:mt-8 sm:aspect-[16/10] md:mt-10 md:aspect-[16/9] md:min-h-[23rem]"
                  />
                </div>

                <div className="min-w-0 md:col-span-4 md:col-start-9 md:pt-[4.2rem]">
                  {latestProject.relationship ? (
                    <div className="border-t border-[var(--rule)] pt-5">
                      <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">Project Relationship</p>
                      <div className="mt-4">
                        <ProjectClientMark name={latestProject.relationship} />
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-7 border-t border-[var(--rule)] pt-5 md:mt-8">
                    <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">Scope</p>
                    <ul className="mt-4 grid list-none gap-2.5 p-0 text-[0.98rem] leading-6 sm:gap-3">
                      {latestProject.scopes.map((scope) => <li key={scope}>{scope}</li>)}
                    </ul>
                  </div>

                  <p className="font-technical mt-6 text-[0.78rem] leading-5 text-[var(--muted)] md:mt-7">
                    {[latestProject.location, latestProject.year].filter(Boolean).join(" · ")}
                  </p>

                  <div className="mt-5 md:mt-7">
                    <ArrowLink href={`/projects/${latestProject.slug}`}>View Full Project Scope</ArrowLink>
                  </div>
                </div>
              </article>

              <ProjectShowcaseRail projects={projectRail} allProjects={verifiedProjects} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pb-12 sm:pb-16 md:pb-20">
        <Container>
          <RelationshipRail names={clients} />
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-16 text-[var(--canvas)] sm:py-20 md:py-24">
        <Container>
          <SectionLabel>Core Technical Services</SectionLabel>
          <h2 className="mt-5 max-w-4xl text-[clamp(2.15rem,4.8vw,4.1rem)] font-medium leading-[1] tracking-[-0.042em] sm:mt-6">
            Technical disciplines for substations, protection and control.
          </h2>
          <ServiceIndex />

          <div className="mt-8 grid gap-2.5 border-t border-white/18 pt-6 text-[0.95rem] leading-6 text-white/72 sm:mt-10 sm:grid-cols-2 sm:gap-3 sm:pt-7 lg:grid-cols-4">
            <span>Electrical Installation</span>
            <span>Power Quality</span>
            <span>Operation & Maintenance</span>
            <span>Engineering Support</span>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 md:py-28">
        <Container>
          <div className="grid gap-6 sm:gap-7 md:grid-cols-12 md:items-end md:gap-8">
            <div className="min-w-0 md:col-span-5">
              <SectionLabel>Project Execution</SectionLabel>
              <h2 className="mt-5 max-w-[15ch] text-[clamp(2rem,3.8vw,3.55rem)] font-medium leading-[1.02] tracking-[-0.04em] sm:mt-6">
                A controlled path from engineering review to energization.
              </h2>
            </div>
            <p className="m-0 max-w-xl text-[1rem] leading-7 text-[var(--muted)] md:col-span-6 md:col-start-7 md:text-[1.02rem]">
              Each scope moves through documented review, approved procedures, installation, functional testing, commissioning and final records for handover.
            </p>
          </div>
          <ExecutionTrack />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-24">
        <Container>
          <div className="grid gap-7 border-t border-[var(--rule)] pt-7 sm:gap-8 sm:pt-8 md:grid-cols-12 md:items-center md:pt-9">
            <div className="min-w-0 md:col-span-6">
              <AboutBrandArtwork variant="compact" />
            </div>
            <div className="min-w-0 md:col-span-6 md:col-start-7">
              <SectionLabel>About AFAAQ</SectionLabel>
              <h2 className="mt-5 max-w-[18ch] text-[clamp(1.95rem,3.35vw,3.15rem)] font-medium leading-[1.03] tracking-[-0.038em]">
                A Cairo-based engineering contractor focused on power-system delivery.
              </h2>
              <p className="mt-5 max-w-xl text-[1rem] leading-7 text-[var(--muted)] sm:mt-6 md:text-[1.02rem]">
                Founded in 2017, AFAAQ ARAB delivers electrical contracting, testing and commissioning, protection, control and automation work for power-system environments.
              </p>
              <div className="mt-5 sm:mt-6">
                <ArrowLink href="/about">About AFAAQ</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-16 text-[var(--canvas)] sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-7 sm:gap-10 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-8">
              <p className="font-technical m-0 text-[0.78rem] font-medium uppercase leading-5 tracking-[0.08em] text-white/60">Project Inquiry</p>
              <h2 className="mt-5 max-w-4xl text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em] sm:mt-6">
                Have a testing, commissioning or protection scope?
              </h2>
            </div>
            <div className="min-w-0 md:col-span-4">
              <p className="m-0 max-w-md text-[1rem] leading-7 text-white/72 md:text-[1.02rem]">
                Discuss your project requirements directly with AFAAQ&apos;s engineering team.
              </p>
              <div className="mt-5 sm:mt-6">
                <PrimaryAction href="/contact" tone="light">Discuss a Project Scope</PrimaryAction>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
