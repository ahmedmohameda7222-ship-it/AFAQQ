import type { Metadata } from "next";
import { AboutBrandArtwork } from "@/components/afaaq/about-brand-artwork";
import { Container } from "@/components/layout/container";
import { RelationshipRail } from "@/components/afaaq/relationship-rail";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { clients, company, companyFacts, equipment, sectors, standards } from "@/content/company";
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
      <section className="pb-14 pt-12 sm:pb-16 sm:pt-14 md:pb-28 md:pt-20">
        <Container>
          <div className="grid gap-7 sm:gap-10 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-8">
              <SectionLabel>About AFAAQ</SectionLabel>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.55rem,6vw,5.3rem)] font-medium leading-[0.97] tracking-[-0.048em] sm:mt-6 md:leading-[0.96] md:tracking-[-0.052em]">
                Electrical engineering built around field execution.
              </h1>
            </div>
            <p className="m-0 max-w-lg text-[1.02rem] leading-7 text-[var(--muted)] md:col-span-4 md:text-[1.05rem] md:leading-8">
              AFAAQ ARAB works on power-system installation, testing, commissioning, protection and control projects.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-28">
        <Container>
          <AboutBrandArtwork variant="wide" />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-28">
        <Container>
          <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
            <div className="min-w-0 md:col-span-5">
              <SectionLabel>Company</SectionLabel>
              <h2 className="mt-5 max-w-xl text-[clamp(2.1rem,4.5vw,4rem)] font-medium leading-[1] tracking-[-0.044em] sm:mt-6 md:tracking-[-0.048em]">
                From engineering review to energization and handover.
              </h2>
            </div>
            <div className="min-w-0 md:col-span-6 md:col-start-7">
              <p className="m-0 text-[1.05rem] leading-7 md:text-[1.08rem] md:leading-8">
                Founded in {company.founded} and based in {company.location}, AFAAQ ARAB provides electrical engineering and contracting services for power and infrastructure projects.
              </p>
              <p className="mt-5 text-[1rem] leading-7 text-[var(--muted)] sm:mt-6">
                Our work combines electrical installation with testing, protection and control. The goal is simple: make sure the systems are installed correctly, tested clearly and ready for safe operation.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 border-y border-[var(--rule)] sm:mt-16 md:grid-cols-4">
            {companyFacts.map(([value, label], index) => {
              const mobileBorders = `${index % 2 === 0 ? "border-r" : ""} ${index < 2 ? "border-b" : ""}`;
              const desktopBorders = index < companyFacts.length - 1 ? "md:border-r" : "md:border-r-0";

              return (
                <div
                  key={label}
                  className={`${mobileBorders} ${desktopBorders} border-[var(--rule)] px-0 py-6 odd:pr-4 even:pl-4 md:border-b-0 md:px-6 md:py-7 md:first:pl-0 md:last:pr-0`}
                >
                  <p className="m-0 text-[clamp(2rem,4vw,3.6rem)] font-medium tracking-[-0.05em]">{value}</p>
                  <p className="mb-0 mt-2 text-[0.82rem] leading-5 text-[var(--muted)] sm:text-sm">{label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-16 text-[var(--canvas)] sm:py-20 md:py-28">
        <Container>
          <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
            <div className="min-w-0 md:col-span-4">
              <SectionLabel>Engineering Focus</SectionLabel>
              <h2 className="mt-5 text-[clamp(2.1rem,4.5vw,4rem)] font-medium leading-[1] tracking-[-0.044em] sm:mt-6 md:tracking-[-0.048em]">
                Specialist electrical work for power systems.
              </h2>
            </div>
            <div className="min-w-0 md:col-span-7 md:col-start-6">
              {focus.map((item, index) => (
                <p key={item} className="m-0 grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-t border-white/18 py-5 text-[clamp(1.3rem,2.7vw,2.2rem)] font-medium tracking-[-0.03em] last:border-b sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4 sm:py-6 sm:tracking-[-0.035em]">
                  <span className="pt-1 text-[0.72rem] tracking-[0.1em] text-white/50 sm:text-xs">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0">{item}</span>
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 md:py-28">
        <Container>
          <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
            <div className="min-w-0 md:col-span-4">
              <SectionLabel>Sectors</SectionLabel>
              <p className="mt-5 max-w-sm text-[1rem] leading-7 text-[var(--muted)]">AFAAQ capabilities support electrical projects across utilities, industry and infrastructure.</p>
            </div>
            <div className="flex min-w-0 flex-wrap content-start gap-x-5 gap-y-3 sm:gap-x-7 sm:gap-y-4 md:col-span-7 md:col-start-6">
              {sectors.map((sector) => (
                <span key={sector} className="text-[clamp(1.25rem,2.5vw,2rem)] font-medium tracking-[-0.03em] sm:tracking-[-0.035em]">{sector}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-28">
        <Container><RelationshipRail names={clients} /></Container>
      </section>

      <section className="border-y border-[var(--rule)] py-16 sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
            <div className="min-w-0 md:col-span-4">
              <SectionLabel>Technical Reference</SectionLabel>
              <h2 className="mt-5 text-[clamp(2.05rem,4vw,3.6rem)] font-medium leading-[1] tracking-[-0.042em] sm:mt-6 md:tracking-[-0.045em]">Standards and field equipment.</h2>
            </div>
            <div className="min-w-0 md:col-span-7 md:col-start-6">
              <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)] sm:text-xs sm:tracking-[0.12em]">Standards</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2.5 sm:mt-5 sm:gap-x-6 sm:gap-y-3">
                {standards.map((item) => <span key={item} className="text-[1.05rem] font-medium sm:text-lg">{item}</span>)}
              </div>
              <p className="mb-0 mt-8 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)] sm:mt-10 sm:text-xs sm:tracking-[0.12em]">Equipment</p>
              <div className="mt-4 grid gap-x-8 sm:mt-5 md:grid-cols-2">
                {equipment.map((item) => <p key={item} className="m-0 border-t border-[var(--rule)] py-4 text-sm font-medium leading-6">{item}</p>)}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-8">
              <SectionLabel>See the Work</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.045em] sm:mt-6 md:tracking-[-0.05em]">See AFAAQ project experience.</h2>
            </div>
            <div className="flex min-w-0 flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 md:col-span-4">
              <PrimaryAction href="/projects">View Projects</PrimaryAction>
              <ArrowLink href="/contact">Discuss a Project</ArrowLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
