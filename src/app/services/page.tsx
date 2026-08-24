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
  description: "Testing, commissioning, protection, control, electrical installation and engineering services from AFAAQ ARAB.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="pb-16 pt-12 sm:pb-20 sm:pt-14 md:pb-24 md:pt-20">
        <Container>
          <div className="max-w-4xl">
            <SectionLabel>Services</SectionLabel>
            <h1 className="font-display mt-5 max-w-[15ch] text-[clamp(2.8rem,6vw,5.1rem)] font-semibold leading-[0.96] tracking-[-0.04em] sm:mt-6">
              Power-system engineering services.
            </h1>
            <p className="mb-0 mt-6 max-w-2xl text-[1.05rem] leading-7 text-[var(--muted)] sm:text-[1.12rem] sm:leading-8">
              AFAAQ installs, tests and commissions electrical systems for substations, control infrastructure and power projects, with specialist protection and engineering support around the field scope.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-16 sm:py-20 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display m-0 text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
              Core engineering capabilities.
            </h2>
            <p className="mb-0 mt-5 max-w-2xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.05rem]">
              Testing & Commissioning and Protection & Control carry the primary technical scope across AFAAQ&apos;s power-system work.
            </p>
          </div>

          <div className="mt-10 grid overflow-hidden border-y border-[var(--rule)] md:grid-cols-2 sm:mt-12">
            {primaryServices.map((service, index) => (
              <article
                key={service.slug}
                className={`min-w-0 py-8 sm:py-10 md:px-8 lg:px-10 ${index > 0 ? "border-t border-[var(--rule)] md:border-l md:border-t-0" : ""}`}
              >
                <h3 className="font-display m-0 max-w-[14ch] text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.032em]">
                  {service.title}
                </h3>
                <p className="mb-0 mt-5 max-w-xl text-[1.02rem] leading-7 text-[var(--muted)] sm:text-[1.06rem]">
                  {service.summary}
                </p>
                <div className="mt-6">
                  <ArrowLink href={`/services/${service.slug}`}>Explore {service.title}</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display m-0 text-[clamp(2.1rem,4vw,3.65rem)] font-semibold leading-[1] tracking-[-0.032em]">
              Supporting capabilities across the project lifecycle.
            </h2>
          </div>

          <div className="mt-9 grid border-t border-[var(--rule)] sm:mt-11 md:grid-cols-2 md:gap-x-10">
            {supportingServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid min-h-24 grid-cols-[minmax(0,1fr)_auto] items-center gap-5 border-b border-[var(--rule)] py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4"
              >
                <div className="min-w-0">
                  <h3 className="font-display m-0 text-[1.35rem] font-semibold leading-[1.08] tracking-[-0.022em] sm:text-[1.5rem]">
                    {service.title}
                  </h3>
                  <p className="mb-0 mt-2 max-w-xl text-[0.95rem] leading-6 text-[var(--muted)]">
                    {service.summary}
                  </p>
                </div>
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-[var(--brand-navy)] transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" fill="none">
                  <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-deep-navy)] py-16 text-white sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="min-w-0 md:col-span-5">
              <h2 className="font-display m-0 max-w-[14ch] text-[clamp(2.2rem,4.2vw,3.8rem)] font-semibold leading-[0.98] tracking-[-0.034em]">
                Technical references used in field delivery.
              </h2>
              <p className="mb-0 mt-5 max-w-lg text-[1rem] leading-7 text-white/72">
                Standards, protocols and test equipment are applied according to project equipment, protection philosophy and approved requirements.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                {[...standards, ...protocols].map((item) => (
                  <span key={item} className="font-technical text-[0.92rem] font-semibold text-white/90">{item}</span>
                ))}
              </div>
            </div>

            <div className="min-w-0 md:col-span-6 md:col-start-7">
              <h3 className="font-display m-0 text-[1.55rem] font-semibold tracking-[-0.025em]">Field testing equipment</h3>
              <div className="mt-5 grid gap-x-8 sm:grid-cols-2">
                {equipment.map((item) => (
                  <p key={item} className="m-0 border-t border-white/18 py-4 text-[0.94rem] font-medium leading-6 text-white/82">
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
            <SectionLabel>Project Inquiry</SectionLabel>
            <h2 className="font-display mt-5 max-w-[16ch] text-[clamp(2.3rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.038em] sm:mt-6">
              Send us your electrical project scope.
            </h2>
            <div className="mt-7">
              <PrimaryAction href="/contact">Discuss a Project Scope</PrimaryAction>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
