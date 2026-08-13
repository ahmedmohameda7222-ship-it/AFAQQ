import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { ExecutionTrack } from "@/components/afaaq/execution-track";
import { RelationshipRail } from "@/components/afaaq/relationship-rail";
import { ServiceIndex } from "@/components/afaaq/service-index";
import { clients } from "@/content/company";
import { verifiedProjects } from "@/content/projects";
import { SelectedProjects } from "@/components/afaaq/selected-projects";

const disciplines = [
  "Testing & Commissioning",
  "Protection & Control",
  "SCADA / RTU Integration",
] as const;

const flagshipProject = verifiedProjects.find((project) => project.slug === "delta-regional-control-center");
const selectedProjects = verifiedProjects.filter((project) => project.slug !== "delta-regional-control-center");

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-8 sm:pt-10 md:pb-28 md:pt-12 lg:pb-24 lg:pt-14">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7 lg:pt-4">
              <SectionLabel>Electrical Engineering & Contracting</SectionLabel>

              <h1 className="mt-6 max-w-[760px] text-[clamp(2.9rem,5.1vw,4.55rem)] font-medium leading-[0.98] tracking-[-0.05em] text-[var(--ink)]">
                Electrical testing, commissioning and protection for power systems.
              </h1>

              <p className="mt-8 max-w-[42rem] text-[1.05rem] leading-7 text-[var(--muted)] md:text-[1.12rem] md:leading-8">
                AFAAQ ARAB supports utilities, EPC contractors and power-system teams across substations and control infrastructure, from electrical installation and system integration through testing, energization and handover.
              </p>

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
                <PrimaryAction href="/contact">Discuss a Project Scope</PrimaryAction>
                <ArrowLink href="/projects">View Our Projects</ArrowLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="hero-media-placeholder relative aspect-[4/5] min-h-[27rem] overflow-hidden bg-[var(--graphite)] lg:min-h-[32rem]"
                aria-label="AFAAQ project photography placeholder"
                role="img"
              >
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/28 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="border-t border-[var(--rule)] pt-7 md:pt-9">
            <SectionLabel>Power System Experience</SectionLabel>

            <div className="mt-10 grid grid-cols-3 gap-4 md:mt-14 md:gap-8">
              {[
                ["11", "kV"],
                ["66", "kV"],
                ["220", "kV"],
              ].map(([value, unit]) => (
                <div key={value} className="border-r border-[var(--rule)] last:border-r-0">
                  <div className="flex items-end gap-1.5">
                    <span className="font-technical text-[clamp(2.6rem,5.7vw,4.6rem)] font-medium leading-none tracking-[-0.055em]">{value}</span>
                    <span className="font-technical mb-1 text-[0.72rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)] md:mb-2 md:text-xs">{unit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 grid gap-3 border-t border-[var(--rule)] pt-6 md:mt-12 md:grid-cols-3 md:gap-8 md:pt-7">
              {disciplines.map((discipline) => (
                <p key={discipline} className="m-0 text-sm font-medium tracking-[-0.01em] md:text-[0.95rem]">
                  {discipline}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {flagshipProject ? (
        <section className="pb-24 md:pb-36">
          <Container>
            <div className="grid gap-8 border-t border-[var(--rule)] pt-8 md:grid-cols-12 md:pt-10">
              <div className="md:col-span-8">
                <SectionLabel>Selected Project / 01</SectionLabel>
                <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,5vw,4.3rem)] font-medium leading-[0.98] tracking-[-0.05em]">
                  {flagshipProject.name}
                </h2>
                <div
                  className="project-media-placeholder mt-10 aspect-[16/10] min-h-[24rem] bg-[var(--graphite)] md:mt-12"
                  aria-label="Delta Regional Control Center project photography placeholder"
                  role="img"
                />
              </div>

              <div className="md:col-span-4 md:pt-[4.25rem]">
                <p className="font-technical m-0 text-[clamp(2rem,4vw,3.35rem)] font-medium leading-none tracking-[-0.05em]">
                  {flagshipProject.voltage.map((item) => item.replace(" kV", "")).join(" / ")} <span className="text-sm tracking-normal text-[var(--muted)]">kV</span>
                </p>

                <div className="mt-10 border-t border-[var(--rule)] pt-5">
                  <p className="font-technical m-0 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">Scope</p>
                  <ul className="mt-5 grid list-none gap-3 p-0 text-[0.98rem] leading-6">
                    {flagshipProject.scopes.map((scope) => (
                      <li key={scope}>{scope}</li>
                    ))}
                  </ul>
                </div>

                {flagshipProject.relationship ? (
                  <div className="mt-9 border-t border-[var(--rule)] pt-5">
                    <p className="font-technical m-0 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">Project Relationship</p>
                    <p className="mb-0 mt-4 text-lg font-medium tracking-[-0.025em]">{flagshipProject.relationship}</p>
                  </div>
                ) : null}

                <div className="mt-8">
                  <ArrowLink href={`/projects/${flagshipProject.slug}`}>View Full Project Scope</ArrowLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pb-24 md:pb-32">
        <Container>
          <RelationshipRail names={clients} />
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-24 text-[var(--canvas)] md:py-32">
        <Container>
          <SectionLabel>Core Technical Services</SectionLabel>
          <h2 className="mt-7 max-w-4xl text-[clamp(2.4rem,5.3vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.05em]">
            Technical disciplines for substations, protection and control.
          </h2>
          <ServiceIndex />

          <div className="mt-12 grid gap-3 border-t border-white/18 pt-7 text-sm text-white/64 sm:grid-cols-2 lg:grid-cols-4">
            <span>Electrical Installation</span>
            <span>Power Quality</span>
            <span>Operation & Maintenance</span>
            <span>Engineering Support</span>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-36">
        <Container>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel>Project Execution</SectionLabel>
              <h2 className="mt-6 max-w-xl text-[clamp(2.25rem,4.5vw,4rem)] font-medium leading-[1] tracking-[-0.048em]">
                A controlled path from engineering review to energization.
              </h2>
            </div>
            <p className="m-0 max-w-lg self-end text-[1rem] leading-7 text-[var(--muted)] md:col-span-5 md:col-start-8">
              Each scope moves through documented review, approved procedures, installation, functional testing, commissioning and final records for handover.
            </p>
          </div>
          <ExecutionTrack />
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="border-t border-[var(--rule)] pt-8 md:pt-10">
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <SectionLabel>Selected Projects</SectionLabel>
                <h2 className="mt-6 max-w-3xl text-[clamp(2.25rem,4.5vw,4rem)] font-medium leading-[1] tracking-[-0.048em]">
                  Selected work across transmission, distribution and control systems.
                </h2>
              </div>
              <div className="md:col-span-3 md:col-start-10">
                <ArrowLink href="/projects">View All Projects</ArrowLink>
              </div>
            </div>
            <SelectedProjects projects={selectedProjects} startIndex={2} />
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-28">
        <Container>
          <div className="grid gap-10 border-t border-[var(--rule)] pt-8 md:grid-cols-12 md:items-center md:pt-10">
            <div className="md:col-span-6">
              <div
                className="human-media-placeholder aspect-[4/3] min-h-[22rem] bg-[#d8d7d1]"
                aria-label="AFAAQ engineer field photography placeholder"
                role="img"
              />
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <SectionLabel>About AFAAQ</SectionLabel>
              <h2 className="mt-6 max-w-[14ch] text-[clamp(2.15rem,4vw,3.6rem)] font-medium leading-[1] tracking-[-0.048em]">
                A Cairo-based engineering contractor focused on power-system delivery.
              </h2>
              <p className="mt-7 max-w-lg text-[1rem] leading-7 text-[var(--muted)]">
                Founded in 2017, AFAAQ ARAB delivers electrical contracting, testing and commissioning, protection, control and automation work for power-system environments.
              </p>
              <div className="mt-7">
                <ArrowLink href="/about">About AFAAQ</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-24 text-[var(--canvas)] md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="font-technical m-0 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white/45">Project Inquiry</p>
              <h2 className="mt-7 max-w-4xl text-[clamp(2.5rem,5.7vw,5rem)] font-medium leading-[0.96] tracking-[-0.052em]">
                Have a testing, commissioning or protection scope?
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="m-0 max-w-md text-[1rem] leading-7 text-white/62">
                Discuss your project requirements directly with AFAAQ&apos;s engineering team.
              </p>
              <div className="mt-7">
                <PrimaryAction href="/contact" tone="light">Discuss a Project Scope</PrimaryAction>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
