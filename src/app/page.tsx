import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { AboutBrandArtwork } from "@/components/afaaq/about-brand-artwork";
import { ExecutionTrack } from "@/components/afaaq/execution-track";
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { ProjectShowcaseRail } from "@/components/afaaq/project-showcase-rail";
import { RelationshipRail } from "@/components/afaaq/relationship-rail";
import { ServiceIndex } from "@/components/afaaq/service-index";
import { clients } from "@/content/company";
import { getProjectTechnicalLabel, verifiedProjects } from "@/content/projects";

const disciplines = [
  "Testing & Commissioning",
  "Protection & Control",
  "Electrical Installation",
] as const;

const featuredProject = verifiedProjects[0];
const projectRail = featuredProject ? verifiedProjects.filter((project) => project.slug !== featuredProject.slug) : verifiedProjects;

export default function HomePage() {
  const featuredIndex = featuredProject ? verifiedProjects.findIndex((project) => project.slug === featuredProject.slug) : -1;
  const featuredNumber = featuredIndex >= 0 ? String(featuredIndex + 1).padStart(2, "0") : "01";
  const featuredTechnicalLabel = featuredProject ? getProjectTechnicalLabel(featuredProject) : "";

  return (
    <>
      <section className="relative isolate overflow-hidden pt-8 sm:pt-10 md:pt-12 lg:min-h-[670px] lg:pt-0 xl:min-h-[710px]">
        <Container className="relative z-10">
          <div className="lg:flex lg:min-h-[670px] lg:items-center xl:min-h-[710px]">
            <div className="min-w-0 lg:w-[54%] lg:py-14 xl:w-[52%] xl:py-16">
              <SectionLabel>Electrical Engineering & Contracting</SectionLabel>

              <h1 className="mt-5 max-w-[13.8ch] text-[clamp(2.75rem,4.9vw,4.5rem)] font-medium leading-[0.965] tracking-[-0.05em] text-[var(--ink)] sm:mt-6">
                Electrical testing, commissioning and protection for power systems.
              </h1>

              <p className="mt-6 max-w-[39rem] text-[1.06rem] leading-7 text-[var(--muted)] sm:mt-7 md:text-[1.15rem] md:leading-8">
                AFAAQ ARAB supports utilities, EPC contractors and power-system teams across substations and control infrastructure, from electrical installation and system integration through testing, energization and handover.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-8">
                <PrimaryAction href="/contact">Discuss a Project Scope</PrimaryAction>
                <ArrowLink href="/projects">View Our Projects</ArrowLink>
              </div>
            </div>
          </div>
        </Container>

        <div className="relative z-0 mt-7 overflow-hidden sm:mt-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[64%] xl:w-[62%]">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:h-full lg:aspect-auto">
            <Image
              src="/images/home/home-substation-original-1440.jpg"
              alt="High-voltage electrical substation at sunset."
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 64vw"
              className="object-cover object-center lg:object-[58%_center]"
            />
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background:
                  "linear-gradient(180deg, var(--canvas) 0%, color-mix(in srgb, var(--canvas) 82%, transparent) 10%, color-mix(in srgb, var(--canvas) 36%, transparent) 22%, transparent 36%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background:
                  "linear-gradient(90deg, var(--canvas) 0%, var(--canvas) 10%, color-mix(in srgb, var(--canvas) 96%, transparent) 22%, color-mix(in srgb, var(--canvas) 70%, transparent) 38%, color-mix(in srgb, var(--canvas) 24%, transparent) 52%, transparent 68%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="pb-14 pt-10 sm:pb-16 sm:pt-12 md:pb-20 md:pt-14">
        <Container>
          <div className="border-y border-[var(--rule)] py-7 sm:py-8 md:py-10">
            <SectionLabel>Power System Experience</SectionLabel>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 md:mt-10 md:gap-8">
              {[
                ["220", "kV"],
                ["66", "kV"],
                ["11", "kV"],
              ].map(([value, unit]) => (
                <div key={value} className="min-w-0 border-r border-[var(--rule)] pr-2 last:border-r-0 sm:pr-4 md:pr-8">
                  <div className="flex items-end gap-1.5 sm:gap-2">
                    <span className="font-technical text-[clamp(2.5rem,5.7vw,4.7rem)] font-medium leading-none tracking-[-0.05em]">{value}</span>
                    <span className="font-technical mb-1 text-[0.78rem] font-medium uppercase tracking-[0.06em] text-[var(--muted)] sm:text-[0.82rem] md:mb-2">{unit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 border-t border-[var(--rule)] pt-5 sm:mt-8 sm:pt-6 md:grid-cols-3 md:gap-8 md:pt-7">
              {disciplines.map((discipline) => (
                <p key={discipline} className="m-0 text-[1rem] font-medium leading-6 tracking-[-0.012em] md:text-[1.06rem]">
                  {discipline}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {featuredProject ? (
        <section className="pb-16 sm:pb-20 md:pb-24">
          <Container>
            <div className="border-t border-[var(--rule)] pt-7 sm:pt-8 md:pt-10">
              <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
                <div className="min-w-0 md:col-span-8">
                  <SectionLabel>Major Projects</SectionLabel>
                  <h2 className="mt-5 max-w-[22ch] text-[clamp(2.15rem,4vw,3.7rem)] font-medium leading-[1] tracking-[-0.045em] sm:mt-6">
                    Project references across regional control centers and solar-power infrastructure.
                  </h2>
                </div>
                <div className="md:col-span-3 md:col-start-10 md:text-right">
                  <ArrowLink href="/projects">View All Projects</ArrowLink>
                </div>
              </div>

              <article className="mt-8 border-y border-[var(--rule)] sm:mt-10 md:mt-12">
                <div className="grid md:grid-cols-12">
                  <div className="min-w-0 py-7 sm:py-8 md:col-span-7 md:pr-10 md:py-10">
                    <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
                      <p className="font-technical m-0 text-[0.8rem] font-medium uppercase leading-5 tracking-[0.08em] text-[var(--muted)]">
                        Project Reference / {featuredNumber}
                      </p>
                      {featuredTechnicalLabel ? (
                        <p className="font-technical m-0 shrink-0 text-[0.86rem] font-medium text-[var(--muted)]">{featuredTechnicalLabel}</p>
                      ) : null}
                    </div>
                    <h3 className="mt-4 max-w-[16ch] text-[clamp(2.2rem,4.3vw,4rem)] font-medium leading-[0.99] tracking-[-0.046em] sm:mt-5">
                      {featuredProject.name}
                    </h3>
                  </div>

                  <div className="min-w-0 border-t border-[var(--rule)] py-7 sm:py-8 md:col-span-5 md:border-l md:border-t-0 md:pl-10 md:py-10">
                    {featuredProject.relationship ? (
                      <div>
                        <p className="font-technical m-0 text-[0.82rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">Project Relationship</p>
                        <div className="mt-4">
                          <ProjectClientMark name={featuredProject.relationship} />
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-7 border-t border-[var(--rule)] pt-5 sm:mt-8">
                      <p className="font-technical m-0 text-[0.82rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">Scope</p>
                      <ul className="mt-4 grid list-none gap-2.5 p-0 text-[1rem] leading-6 sm:gap-3 sm:text-[1.02rem]">
                        {featuredProject.scopes.map((scope) => <li key={scope}>{scope}</li>)}
                      </ul>
                    </div>

                    <div className="mt-7 flex flex-col gap-4 border-t border-[var(--rule)] pt-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                      <p className="font-technical m-0 text-[0.82rem] leading-5 text-[var(--muted)]">
                        {[featuredProject.location, featuredProject.year].filter(Boolean).join(" · ")}
                      </p>
                      <ArrowLink href={`/projects/${featuredProject.slug}`}>View Full Project Scope</ArrowLink>
                    </div>
                  </div>
                </div>
              </article>

              <ProjectShowcaseRail projects={projectRail} allProjects={verifiedProjects} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pb-12 sm:pb-14 md:pb-18">
        <Container>
          <RelationshipRail names={clients} />
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-16 text-[var(--canvas)] sm:py-20 md:py-24">
        <Container>
          <SectionLabel>Core Technical Services</SectionLabel>
          <h2 className="mt-5 max-w-[18ch] text-[clamp(2.3rem,4.8vw,4.35rem)] font-medium leading-[0.98] tracking-[-0.047em] sm:mt-6">
            Technical disciplines for substations, protection and control.
          </h2>

          <ServiceIndex />

          <div className="mt-9 grid gap-3 border-t border-white/20 pt-6 text-[0.98rem] font-medium leading-6 text-white/78 sm:mt-10 sm:grid-cols-2 sm:gap-4 sm:pt-7 lg:grid-cols-4">
            <span>Electrical Installation</span>
            <span>Power Quality</span>
            <span>Operation & Maintenance</span>
            <span>Engineering Support</span>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:items-end md:gap-8">
            <div className="min-w-0 md:col-span-5">
              <SectionLabel>Project Execution</SectionLabel>
              <h2 className="mt-5 max-w-[14ch] text-[clamp(2.15rem,3.9vw,3.65rem)] font-medium leading-[1] tracking-[-0.043em] sm:mt-6">
                A controlled path from engineering review to energization.
              </h2>
            </div>
            <p className="m-0 max-w-xl text-[1.03rem] leading-7 text-[var(--muted)] md:col-span-6 md:col-start-7 md:text-[1.06rem] md:leading-8">
              Each scope moves through documented review, approved procedures, installation, functional testing, commissioning and final records for handover.
            </p>
          </div>
          <ExecutionTrack />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-24">
        <Container>
          <div className="grid gap-8 border-t border-[var(--rule)] pt-8 sm:gap-10 sm:pt-9 md:grid-cols-12 md:items-center md:pt-10">
            <div className="min-w-0 md:col-span-5">
              <AboutBrandArtwork variant="compact" />
            </div>
            <div className="min-w-0 md:col-span-6 md:col-start-7">
              <SectionLabel>About AFAAQ</SectionLabel>
              <h2 className="mt-5 max-w-[17ch] text-[clamp(2.05rem,3.45vw,3.25rem)] font-medium leading-[1.01] tracking-[-0.041em] sm:mt-6">
                A Cairo-based engineering contractor focused on power-system delivery.
              </h2>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-7 text-[var(--muted)] sm:mt-6 md:text-[1.06rem] md:leading-8">
                Founded in 2017, AFAAQ ARAB delivers electrical contracting, testing and commissioning, protection and control work for power-system environments.
              </p>
              <div className="mt-6">
                <ArrowLink href="/about">About AFAAQ</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-16 text-[var(--canvas)] sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-8 border-t border-white/16 pt-8 sm:gap-10 sm:pt-10 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-7">
              <SectionLabel>Project Inquiry</SectionLabel>
              <h2 className="mt-5 max-w-[16ch] text-[clamp(2.35rem,5vw,4.65rem)] font-medium leading-[0.97] tracking-[-0.05em] sm:mt-6">
                Have a testing, commissioning or protection scope?
              </h2>
            </div>
            <div className="min-w-0 md:col-span-4 md:col-start-9">
              <p className="m-0 max-w-md text-[1.04rem] leading-7 text-white/76 md:text-[1.08rem] md:leading-8">
                Discuss your project requirements directly with AFAAQ&apos;s engineering team.
              </p>
              <div className="mt-6">
                <PrimaryAction href="/contact" tone="light">Discuss a Project Scope</PrimaryAction>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
