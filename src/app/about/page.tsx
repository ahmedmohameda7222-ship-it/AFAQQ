import type { Metadata } from "next";
import { AboutBrandArtwork } from "@/components/afaaq/about-brand-artwork";
import { RelationshipRail } from "@/components/afaaq/relationship-rail";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { clients, company, companyFacts, equipment, standards } from "@/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About AFAAQ ARAB",
  description: "AFAAQ ARAB is an electrical engineering and contracting company focused on power systems, testing, commissioning, protection and control.",
  path: "/about",
});

const focus = ["Power Systems", "Testing & Commissioning", "Protection & Control", "Electrical Installation"] as const;

export default function AboutPage() {
  return (
    <>
      <section className="pb-14 pt-12 sm:pb-16 sm:pt-14 md:pb-20 md:pt-20">
        <Container>
          <div className="max-w-4xl">
            <SectionLabel>About AFAAQ</SectionLabel>
            <h1 className="font-display mt-5 max-w-[15ch] text-[clamp(2.8rem,6vw,5.1rem)] font-semibold leading-[0.96] tracking-[-0.04em] sm:mt-6">
              Electrical engineering built around field execution.
            </h1>
            <p className="mb-0 mt-6 max-w-2xl text-[1.05rem] leading-7 text-[var(--muted)] sm:text-[1.12rem] sm:leading-8">
              AFAAQ ARAB works on power-system installation, testing, commissioning, protection and control projects from its Cairo base.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-24">
        <Container>
          <AboutBrandArtwork variant="wide" />
        </Container>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <h2 className="font-display m-0 max-w-[17ch] text-[clamp(2.2rem,4.4vw,4rem)] font-semibold leading-[0.99] tracking-[-0.035em]">
              From engineering review to energization and handover.
            </h2>
            <p className="mb-0 mt-6 max-w-3xl text-[1.05rem] leading-7 text-[var(--ink)] md:text-[1.1rem] md:leading-8">
              Founded in {company.founded} and based in {company.location}, AFAAQ ARAB provides electrical engineering and contracting services for power and infrastructure projects.
            </p>
            <p className="mb-0 mt-4 max-w-3xl text-[1rem] leading-7 text-[var(--muted)]">
              The company combines electrical installation with testing, protection and control so systems can be verified against project requirements and prepared for safe operation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 border-t border-[var(--rule)] sm:mt-14 md:grid-cols-5">
            {companyFacts.map(([value, label], index) => (
              <div
                key={label}
                className={`min-w-0 border-b border-[var(--rule)] py-6 pr-4 md:px-5 md:py-8 ${index > 0 ? "md:border-l" : ""} md:first:pl-0 md:last:pr-0`}
              >
                <p className="font-display m-0 text-[clamp(2rem,4vw,3.6rem)] font-semibold tracking-[-0.045em] text-[var(--brand-navy)]">{value}</p>
                <p className="mb-0 mt-2 text-[0.88rem] leading-6 text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-deep-navy)] py-16 text-white sm:py-20 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display m-0 text-[clamp(2.2rem,4.4vw,4rem)] font-semibold leading-[0.99] tracking-[-0.035em]">
              Specialist electrical work for power systems.
            </h2>
          </div>
          <div className="mt-9 grid border-t border-white/18 sm:mt-11 md:grid-cols-2">
            {focus.map((item, index) => (
              <p
                key={item}
                className={`font-display m-0 border-b border-white/18 py-6 text-[clamp(1.35rem,2.7vw,2.25rem)] font-semibold leading-[1.08] tracking-[-0.028em] md:px-7 md:py-8 ${index % 2 === 1 ? "md:border-l" : ""} md:first:pl-0`}
              >
                {item}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <RelationshipRail names={clients} motion="static" />
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-16 sm:py-20 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display m-0 text-[clamp(2.1rem,4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.032em]">
              Technical reference used in field work.
            </h2>
            <p className="mb-0 mt-5 max-w-2xl text-[1rem] leading-7 text-[var(--muted)]">
              Standards and field equipment are applied according to the equipment, protection philosophy, test scope and approved project requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="min-w-0 md:col-span-4">
              <h3 className="font-display m-0 text-[1.45rem] font-semibold tracking-[-0.025em]">Standards</h3>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {standards.map((item) => (
                  <span key={item} className="font-technical text-[0.95rem] font-semibold text-[var(--brand-navy)]">{item}</span>
                ))}
              </div>
            </div>
            <div className="min-w-0 md:col-span-7 md:col-start-6">
              <h3 className="font-display m-0 text-[1.45rem] font-semibold tracking-[-0.025em]">Field equipment</h3>
              <div className="mt-5 grid gap-x-8 border-t border-[var(--rule)] sm:grid-cols-2">
                {equipment.map((item) => (
                  <p key={item} className="m-0 border-b border-[var(--rule)] py-4 text-[0.94rem] font-medium leading-6">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>Project Experience</SectionLabel>
            <h2 className="font-display mt-5 max-w-[15ch] text-[clamp(2.25rem,5vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.038em] sm:mt-6">
              See AFAAQ&apos;s verified project references.
            </h2>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6">
              <PrimaryAction href="/projects">View Projects</PrimaryAction>
              <ArrowLink href="/contact">Discuss a Project</ArrowLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
