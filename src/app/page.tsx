import Image from "next/image";
import { AboutBrandArtwork } from "@/components/afaaq/about-brand-artwork";
import { CapabilityGrid } from "@/components/afaaq/capability-grid";
import { CompanyScale } from "@/components/afaaq/company-scale";
import { ExecutionTrack } from "@/components/afaaq/execution-track";
import { PowerRail } from "@/components/afaaq/power-rail";
import { ProjectReferenceBoard } from "@/components/afaaq/project-reference-board";
import { RelationshipRail } from "@/components/afaaq/relationship-rail";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { clients, company, companyFacts } from "@/content/company";
import { verifiedProjects } from "@/content/projects";

const voltageExperience = [
  { value: "220", unit: "kV" },
  { value: "66", unit: "kV" },
  { value: "11", unit: "kV" },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[var(--hero-canvas)] pt-8 [--hero-canvas:#f4f3ef] sm:pt-10 md:pt-12 lg:min-h-[690px] lg:pt-0 xl:min-h-[730px]">
        <Container className="relative z-10">
          <div className="lg:flex lg:min-h-[690px] lg:items-center xl:min-h-[730px]">
            <div className="min-w-0 lg:w-[55%] lg:py-16 xl:w-[52%] xl:py-18">
              <SectionLabel>Electrical Engineering & Contracting</SectionLabel>

              <h1 className="font-display mt-5 max-w-[14.5ch] text-[clamp(2.9rem,5vw,4.9rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--ink)] sm:mt-6">
                Electrical testing, commissioning and protection for power systems.
              </h1>

              <p className="mt-6 max-w-[38rem] text-[1.1rem] leading-7 text-[var(--muted)] sm:mt-7 md:text-[1.2rem] md:leading-8">
                AFAAQ ARAB supports utilities, EPC contractors and power-system teams across substations and control infrastructure, from electrical installation and system integration through testing, energization and handover.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-8">
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
                  "linear-gradient(180deg, var(--hero-canvas) 0%, color-mix(in srgb, var(--hero-canvas) 72%, transparent) 9%, color-mix(in srgb, var(--hero-canvas) 24%, transparent) 20%, transparent 34%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background:
                  "linear-gradient(90deg, var(--hero-canvas) 0%, var(--hero-canvas) 8%, color-mix(in srgb, var(--hero-canvas) 92%, transparent) 20%, color-mix(in srgb, var(--hero-canvas) 58%, transparent) 37%, color-mix(in srgb, var(--hero-canvas) 14%, transparent) 53%, transparent 66%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <PowerRail
        voltages={voltageExperience}
        scaleValue="150+"
        scaleLabel="Substations delivered"
      />

      <section className="py-18 sm:py-22 md:py-26">
        <Container>
          <div className="grid gap-7 md:grid-cols-12 md:items-end md:gap-8">
            <div className="min-w-0 md:col-span-7">
              <SectionLabel>Technical Capabilities</SectionLabel>
              <h2 className="font-display mt-5 max-w-[17ch] text-[clamp(2.35rem,4.4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.035em] sm:mt-6">
                Engineering disciplines focused on safe, controlled power-system delivery.
              </h2>
            </div>
            <p className="m-0 max-w-xl text-[1.04rem] leading-7 text-[var(--muted)] md:col-span-4 md:col-start-9 md:text-[1.08rem] md:leading-8">
              Testing, protection, installation and engineering support are organized around the requirements of substations and control infrastructure.
            </p>
          </div>
          <CapabilityGrid />
        </Container>
      </section>

      {verifiedProjects.length ? (
        <section className="bg-[var(--surface)] py-18 sm:py-22 md:py-26">
          <Container>
            <div className="grid gap-7 md:grid-cols-12 md:items-end md:gap-8">
              <div className="min-w-0 md:col-span-8">
                <SectionLabel>Major Project References</SectionLabel>
                <h2 className="font-display mt-5 max-w-[20ch] text-[clamp(2.35rem,4.4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.035em] sm:mt-6">
                  Verified references across regional control centers and solar-power infrastructure.
                </h2>
              </div>
              <div className="md:col-span-3 md:col-start-10 md:text-right">
                <ArrowLink href="/projects">View All Projects</ArrowLink>
              </div>
            </div>

            <ProjectReferenceBoard projects={verifiedProjects} />
          </Container>
        </section>
      ) : null}

      <section className="py-18 sm:py-22 md:py-26">
        <Container>
          <div className="grid gap-7 md:grid-cols-12 md:items-end md:gap-8">
            <div className="min-w-0 md:col-span-7">
              <SectionLabel>Company Scale</SectionLabel>
              <h2 className="font-display mt-5 max-w-[18ch] text-[clamp(2.3rem,4.1vw,3.9rem)] font-semibold leading-[0.99] tracking-[-0.034em] sm:mt-6">
                Delivery scale shown through verified company experience.
              </h2>
            </div>
            <p className="m-0 max-w-lg text-[1.02rem] leading-7 text-[var(--muted)] md:col-span-4 md:col-start-9 md:text-[1.06rem]">
              Company credentials are presented separately from voltage experience so technical depth and delivery scale remain distinct.
            </p>
          </div>
          <div className="mt-10 sm:mt-12">
            <CompanyScale />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-18 sm:py-22 md:py-26">
        <Container>
          <RelationshipRail names={clients} />
        </Container>
      </section>

      <section className="py-18 sm:py-22 md:py-26">
        <Container>
          <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:items-end md:gap-8">
            <div className="min-w-0 md:col-span-5">
              <SectionLabel>Project Execution</SectionLabel>
              <h2 className="font-display mt-5 max-w-[14ch] text-[clamp(2.2rem,3.9vw,3.7rem)] font-semibold leading-[1] tracking-[-0.032em] sm:mt-6">
                A controlled path from engineering review to energization.
              </h2>
            </div>
            <p className="m-0 max-w-xl text-[1.04rem] leading-7 text-[var(--muted)] md:col-span-6 md:col-start-7 md:text-[1.08rem] md:leading-8">
              Each scope moves through documented review, approved procedures, installation, functional testing, commissioning and final records for handover.
            </p>
          </div>
          <ExecutionTrack />
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-18 sm:py-22 md:py-26">
        <Container>
          <div className="grid gap-9 md:grid-cols-12 md:items-center md:gap-10">
            <div className="min-w-0 md:col-span-5 md:col-start-1">
              <SectionLabel>About AFAAQ</SectionLabel>
              <h2 className="font-display mt-5 max-w-[17ch] text-[clamp(2.1rem,3.5vw,3.35rem)] font-semibold leading-[1.01] tracking-[-0.03em] sm:mt-6">
                A Cairo-based engineering contractor focused on power-system delivery.
              </h2>
              <p className="mt-5 max-w-xl text-[1.03rem] leading-7 text-[var(--muted)] sm:mt-6 md:text-[1.08rem] md:leading-8">
                Founded in 2017, AFAAQ ARAB delivers electrical contracting, testing and commissioning, protection and control work for power-system environments.
              </p>
              <div className="mt-7 grid gap-4 border-y border-[var(--rule)] py-5 sm:grid-cols-2">
                <div>
                  <p className="font-display m-0 text-[1.55rem] font-semibold tracking-[-0.03em] text-[var(--brand-navy)]">2017</p>
                  <p className="mb-0 mt-1 text-[0.94rem] leading-6 text-[var(--muted)]">Founded</p>
                </div>
                <div>
                  <p className="font-display m-0 text-[1.55rem] font-semibold tracking-[-0.03em] text-[var(--brand-navy)]">Cairo, Egypt</p>
                  <p className="mb-0 mt-1 text-[0.94rem] leading-6 text-[var(--muted)]">Head office</p>
                </div>
              </div>
              <div className="mt-6">
                <ArrowLink href="/about">About AFAAQ</ArrowLink>
              </div>
            </div>
            <div className="min-w-0 md:col-span-6 md:col-start-7">
              <AboutBrandArtwork variant="compact" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-deep-navy)] py-18 text-white sm:py-22 md:py-26">
        <Container>
          <div className="h-1 w-20 bg-[var(--brand-blue)]" aria-hidden="true" />
          <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
            <div className="min-w-0 md:col-span-6">
              <SectionLabel>Project Inquiry</SectionLabel>
              <h2 className="font-display mt-5 max-w-[16ch] text-[clamp(2.4rem,5vw,4.7rem)] font-semibold leading-[0.97] tracking-[-0.038em] sm:mt-6">
                Have a testing, commissioning or protection scope?
              </h2>
            </div>
            <div className="min-w-0 md:col-span-4 md:col-start-9">
              <p className="m-0 max-w-md text-[1.02rem] leading-7 text-white/78">
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
