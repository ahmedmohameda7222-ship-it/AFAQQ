import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceProcessVisual } from "@/components/afaaq/service-process-visual";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { equipment } from "@/content/company";
import { getProjectTechnicalLabel, projects } from "@/content/projects";
import { getService, services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({ title: service.title, description: service.summary, path: `/services/${slug}` });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((project) => service.relatedProjectSlugs.includes(project.slug));
  const inquiryHref = `/contact?service=${encodeURIComponent(service.title)}`;

  return (
    <>
      <section className="pb-12 pt-12 sm:pb-14 sm:pt-14 md:pb-16 md:pt-20">
        <Container>
          <div className="max-w-4xl">
            <SectionLabel>Services</SectionLabel>
            <h1 className="font-display mt-5 max-w-[16ch] text-[clamp(2.8rem,6vw,5.1rem)] font-semibold leading-[0.96] tracking-[-0.04em] sm:mt-6">
              {service.title}
            </h1>
            <p className="mb-0 mt-6 max-w-2xl text-[1.05rem] leading-7 text-[var(--muted)] sm:text-[1.12rem] sm:leading-8">
              {service.intro}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-24">
        <Container>
          <ServiceProcessVisual slug={slug} />
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-16 sm:py-20 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display m-0 text-[clamp(2.15rem,4.2vw,3.8rem)] font-semibold leading-[0.99] tracking-[-0.034em]">
              What AFAAQ covers in this scope.
            </h2>
          </div>
          <div className="mt-9 grid border-t border-[var(--rule)] sm:mt-11 sm:grid-cols-2 sm:gap-x-10">
            {service.capabilities.map((item) => (
              <p key={item} className="m-0 border-b border-[var(--rule)] py-5 text-[1rem] font-medium leading-7 sm:text-[1.05rem]">
                {item}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {service.methods?.length ? (
        <section className="py-16 sm:py-20 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-display m-0 text-[clamp(2.05rem,3.8vw,3.45rem)] font-semibold leading-[1] tracking-[-0.032em]">
                Methods and verification checks.
              </h2>
              <p className="mb-0 mt-5 max-w-2xl text-[1rem] leading-7 text-[var(--muted)]">
                The exact test plan depends on the equipment, protection scheme and approved project requirements.
              </p>
            </div>
            <div className="mt-8 grid gap-x-10 border-t border-[var(--rule)] sm:mt-10 md:grid-cols-2">
              {service.methods.map((item) => (
                <p key={item} className="m-0 border-b border-[var(--rule)] py-5 text-[0.98rem] font-medium leading-7 sm:text-[1rem]">
                  {item}
                </p>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {service.standards?.length ? (
        <section className="bg-[var(--brand-deep-navy)] py-14 text-white sm:py-16 md:py-20">
          <Container>
            <h2 className="font-display m-0 text-[clamp(1.75rem,3vw,2.8rem)] font-semibold tracking-[-0.03em]">
              Relevant standards & protocols
            </h2>
            <div className="mt-6 flex min-w-0 flex-wrap gap-x-6 gap-y-3 sm:mt-7 sm:gap-x-8 sm:gap-y-4">
              {service.standards.map((item) => (
                <span key={item} className="font-technical text-[clamp(1rem,2.2vw,1.45rem)] font-semibold text-white/88">{item}</span>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {slug === "testing-commissioning" ? (
        <section className="py-16 sm:py-20 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-display m-0 text-[clamp(2.05rem,3.8vw,3.45rem)] font-semibold leading-[1] tracking-[-0.032em]">
                Field testing equipment.
              </h2>
            </div>
            <div className="mt-8 grid gap-x-10 border-t border-[var(--rule)] sm:mt-10 md:grid-cols-2">
              {equipment.map((item) => (
                <p key={item} className="m-0 border-b border-[var(--rule)] py-5 text-[0.98rem] font-medium leading-7">
                  {item}
                </p>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {relatedProjects.length ? (
        <section className="bg-[var(--surface)] py-16 sm:py-20 md:py-24">
          <Container>
            <h2 className="font-display m-0 text-[clamp(2.05rem,3.8vw,3.45rem)] font-semibold leading-[1] tracking-[-0.032em]">
              Related project references.
            </h2>
            <div className="mt-8 grid gap-0 sm:mt-10">
              {relatedProjects.map((project) => {
                const technicalLabel = getProjectTechnicalLabel(project);

                return (
                  <ArrowLink key={project.slug} href={`/projects/${project.slug}`} className="w-full border-t border-[var(--rule)] py-5 text-[1rem] last:border-b sm:text-lg">
                    {project.name}{technicalLabel ? ` — ${technicalLabel}` : ""}
                  </ArrowLink>
                );
              })}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-[var(--brand-deep-navy)] py-16 text-white sm:py-20 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>Project Inquiry</SectionLabel>
            <h2 className="font-display mt-5 max-w-[16ch] text-[clamp(2.25rem,5vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.038em] sm:mt-6">
              Need support for a {service.title.toLowerCase()} scope?
            </h2>
            <div className="mt-7">
              <PrimaryAction href={inquiryHref} tone="light">Send Project Requirement</PrimaryAction>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
