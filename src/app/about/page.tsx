import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { RelationshipRail } from "@/components/afaaq/relationship-rail";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { clients, company, companyFacts, equipment, sectors, standards } from "@/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About AFAAQ ARAB",
  description: "AFAAQ ARAB is an electrical engineering and contracting company focused on power systems, testing, commissioning, protection, control and SCADA.",
  path: "/about",
});

const focus = ["Power Systems", "Testing & Commissioning", "Protection & Control", "SCADA & Automation"] as const;

export default function AboutPage() {
  return (
    <>
      <section className="pb-20 pt-14 md:pb-28 md:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionLabel>About AFAAQ</SectionLabel>
              <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,5.3rem)] font-medium leading-[0.96] tracking-[-0.052em]">
                Electrical engineering built around field execution.
              </h1>
            </div>
            <p className="m-0 max-w-lg text-[1.05rem] leading-8 text-[var(--muted)] md:col-span-4">
              AFAAQ ARAB works on power-system installation, testing, commissioning, protection, control and automation projects.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="human-media-placeholder aspect-[16/8] min-h-[28rem] bg-[#d8d7d1]" aria-hidden="true" />
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel>Company</SectionLabel>
              <h2 className="mt-6 max-w-xl text-[clamp(2.3rem,4.5vw,4rem)] font-medium leading-[1] tracking-[-0.048em]">
                From engineering review to energization and handover.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="m-0 text-[1.08rem] leading-8">
                Founded in {company.founded} and based in {company.location}, AFAAQ ARAB provides electrical engineering and contracting services for power and infrastructure projects.
              </p>
              <p className="mt-6 text-[1rem] leading-7 text-[var(--muted)]">
                Our work combines electrical installation with testing, protection, control and automation. The goal is simple: make sure the systems are installed correctly, tested clearly and ready for safe operation.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-0 border-y border-[var(--rule)] md:grid-cols-4">
            {companyFacts.map(([value, label]) => (
              <div key={label} className="border-r border-[var(--rule)] px-0 py-7 pr-5 last:border-r-0 md:px-6 md:first:pl-0">
                <p className="m-0 text-[clamp(2.2rem,4vw,3.6rem)] font-medium tracking-[-0.05em]">{value}</p>
                <p className="mb-0 mt-2 text-sm text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-20 text-[var(--canvas)] md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Engineering Focus</SectionLabel>
              <h2 className="mt-6 text-[clamp(2.3rem,4.5vw,4rem)] font-medium leading-[1] tracking-[-0.048em]">
                Specialist electrical work for power systems.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {focus.map((item, index) => (
                <p key={item} className="m-0 grid grid-cols-[3rem_1fr] gap-4 border-t border-white/18 py-6 text-[clamp(1.4rem,2.7vw,2.2rem)] font-medium tracking-[-0.035em] last:border-b">
                  <span className="pt-1 text-xs tracking-[0.1em] text-white/40">{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Sectors</SectionLabel>
              <p className="mt-5 max-w-sm text-[1rem] leading-7 text-[var(--muted)]">AFAAQ capabilities support electrical projects across utilities, industry and infrastructure.</p>
            </div>
            <div className="flex flex-wrap content-start gap-x-7 gap-y-4 md:col-span-7 md:col-start-6">
              {sectors.map((sector) => (
                <span key={sector} className="text-[clamp(1.35rem,2.5vw,2rem)] font-medium tracking-[-0.035em]">{sector}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container><RelationshipRail names={clients} /></Container>
      </section>

      <section className="border-y border-[var(--rule)] py-20 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Technical Reference</SectionLabel>
              <h2 className="mt-6 text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-[1] tracking-[-0.045em]">Standards and field equipment.</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Standards</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                {standards.map((item) => <span key={item} className="text-lg font-medium">{item}</span>)}
              </div>
              <p className="mb-0 mt-10 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Equipment</p>
              <div className="mt-5 grid gap-x-8 md:grid-cols-2">
                {equipment.map((item) => <p key={item} className="m-0 border-t border-[var(--rule)] py-4 text-sm font-medium">{item}</p>)}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionLabel>See the Work</SectionLabel>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,5vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.05em]">See AFAAQ project experience.</h2>
            </div>
            <div className="flex flex-wrap gap-5 md:col-span-4">
              <PrimaryAction href="/projects">View Projects</PrimaryAction>
              <ArrowLink href="/contact">Discuss a Project</ArrowLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
