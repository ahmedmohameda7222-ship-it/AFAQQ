import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";

const disciplines = [
  "Testing & Commissioning",
  "Protection & Control",
  "SCADA / RTU Integration",
] as const;

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-12 sm:pt-16 md:pb-28 md:pt-20 lg:min-h-[calc(100svh-76px)] lg:pb-20 lg:pt-24">
        <Container>
          <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7 lg:pb-10">
              <SectionLabel>Electrical Engineering & Contracting</SectionLabel>

              <h1 className="mt-7 max-w-[12ch] text-[clamp(3rem,6.1vw,5.25rem)] font-medium leading-[0.96] tracking-[-0.052em] text-[var(--ink)]">
                Electrical testing, commissioning and protection for power systems.
              </h1>

              <p className="mt-8 max-w-[39rem] text-[1.05rem] leading-7 text-[var(--muted)] md:text-[1.12rem] md:leading-8">
                AFAAQ ARAB supports power and substation projects from electrical installation and system integration through testing, commissioning, energization and handover.
              </p>

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
                <PrimaryAction href="/contact">Discuss a Project Scope</PrimaryAction>
                <ArrowLink href="/projects">View Selected Projects</ArrowLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="hero-media-placeholder relative aspect-[4/5] min-h-[28rem] overflow-hidden bg-[var(--graphite)] lg:min-h-[34rem]"
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
                    <span className="text-[clamp(2.6rem,5.7vw,4.6rem)] font-medium leading-none tracking-[-0.055em]">{value}</span>
                    <span className="mb-1 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-[var(--muted)] md:mb-2 md:text-xs">{unit}</span>
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
    </>
  );
}
