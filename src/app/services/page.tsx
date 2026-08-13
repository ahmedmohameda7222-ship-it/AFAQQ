import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { equipment, protocols, standards } from "@/content/company";
import { primaryServices, supportingServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Electrical Engineering Services",
  description: "Testing, commissioning, protection, control, SCADA, electrical installation and engineering services from AFAAQ ARAB.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="pb-20 pt-14 md:pb-28 md:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionLabel>Services</SectionLabel>
              <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,5.3rem)] font-medium leading-[0.96] tracking-[-0.052em]">
                Electrical engineering from installation through commissioning.
              </h1>
            </div>
            <p className="m-0 max-w-lg text-[1.05rem] leading-8 text-[var(--muted)] md:col-span-4">
              We install, test and commission electrical systems for power, substation and infrastructure projects.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-20 text-[var(--canvas)] md:py-28">
        <Container>
          <SectionLabel>Core Services</SectionLabel>
          <div className="mt-10 md:mt-14">
            {primaryServices.map((service, index) => (
              <article key={service.slug} className="grid gap-5 border-t border-white/18 py-8 md:grid-cols-12 md:gap-8 md:py-11">
                <p className="m-0 text-xs font-semibold tracking-[0.1em] text-white/40 md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="md:col-span-6">
                  <h2 className="m-0 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1] tracking-[-0.045em]">
                    {service.title}
                  </h2>
                </div>
                <div className="md:col-span-5">
                  <p className="m-0 max-w-lg text-[1rem] leading-7 text-white/65">{service.summary}</p>
                  <div className="mt-6">
                    <ArrowLink href={`/services/${service.slug}`} className="text-[var(--canvas)]">
                      View {service.title}
                    </ArrowLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel>Supporting Capabilities</SectionLabel>
              <h2 className="mt-6 max-w-xl text-[clamp(2.3rem,4.5vw,4rem)] font-medium leading-[1] tracking-[-0.048em]">
                Support around the full electrical project scope.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              {supportingServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group grid min-h-20 grid-cols-[1fr_auto] items-center gap-6 border-t border-[var(--rule)] py-5 last:border-b"
                >
                  <div>
                    <h3 className="m-0 text-xl font-medium tracking-[-0.03em]">{service.title}</h3>
                    <p className="mb-0 mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">{service.summary}</p>
                  </div>
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none">
                    <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--rule)] py-20 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Standards & Protocols</SectionLabel>
              <p className="mt-5 max-w-sm text-[1rem] leading-7 text-[var(--muted)]">
                Technical standards and communication protocols used across testing, protection and automation work.
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="flex flex-wrap gap-x-6 gap-y-4 text-[clamp(1.25rem,2.2vw,1.8rem)] font-medium tracking-[-0.03em]">
                {[...standards, ...protocols].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Testing Equipment</SectionLabel>
              <h2 className="mt-6 text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-[1] tracking-[-0.045em]">
                Equipment for field testing and verification.
              </h2>
            </div>
            <div className="grid gap-0 md:col-span-7 md:col-start-6 md:grid-cols-2 md:gap-x-8">
              {equipment.map((item, index) => (
                <p key={item} className="m-0 border-t border-[var(--rule)] py-4 text-[0.98rem] font-medium leading-6">
                  <span className="mr-4 text-xs text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-20 text-[var(--canvas)] md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionLabel>Project Inquiry</SectionLabel>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,5vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.05em]">
                Send us your electrical project scope.
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
