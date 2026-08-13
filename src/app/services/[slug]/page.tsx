import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { getService, services } from "@/content/services";
import { projects } from "@/content/projects";
import { equipment } from "@/content/company";
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
      <section className="pb-14 pt-12 sm:pb-16 sm:pt-14 md:pb-28 md:pt-20">
        <Container>
          <div className="grid gap-7 sm:gap-10 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-8">
              <SectionLabel>Services / {service.title}</SectionLabel>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.55rem,6vw,5.3rem)] font-medium leading-[0.97] tracking-[-0.048em] sm:mt-6 md:leading-[0.96] md:tracking-[-0.052em]">
                {service.title}
              </h1>
            </div>
            <p className="m-0 max-w-lg text-[1.02rem] leading-7 text-[var(--muted)] md:col-span-4 md:text-[1.05rem] md:leading-8">{service.intro}</p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-16 text-[var(--canvas)] sm:py-20 md:py-28">
        <Container>
          <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
            <div className="min-w-0 md:col-span-4">
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="mt-5 text-[clamp(2.05rem,4.2vw,3.8rem)] font-medium leading-[1] tracking-[-0.044em] sm:mt-6 md:tracking-[-0.047em]">
                Clear technical scope, from checks to final verification.
              </h2>
            </div>
            <div className="min-w-0 md:col-span-7 md:col-start-6">
              {service.capabilities.map((item, index) => (
                <div key={item} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-t border-white/18 py-4 last:border-b sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4 sm:py-5">
                  <span className="text-[0.72rem] font-semibold tracking-[0.1em] text-white/50 sm:text-xs">{String(index + 1).padStart(2, "0")}</span>
                  <p className="m-0 min-w-0 text-[1rem] font-medium leading-7 sm:text-[1.05rem]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {service.methods?.length ? (
        <section className="py-16 sm:py-20 md:py-28">
          <Container>
            <div className="grid gap-8 sm:gap-10 md:grid-cols-12">
              <div className="min-w-0 md:col-span-4">
                <SectionLabel>Methods & Checks</SectionLabel>
                <p className="mt-5 max-w-sm text-[1rem] leading-7 text-[var(--muted)]">
                  The exact test plan depends on the equipment, protection scheme and approved project requirements.
                </p>
              </div>
              <div className="grid min-w-0 gap-x-8 md:col-span-7 md:col-start-6 md:grid-cols-2">
                {service.methods.map((item) => (
                  <p key={item} className="m-0 border-t border-[var(--rule)] py-4 text-[0.98rem] font-medium leading-7 sm:py-5 sm:text-[1rem]">{item}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {service.standards?.length ? (
        <section className="border-y border-[var(--rule)] py-14 sm:py-16 md:py-20">
          <Container>
            <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:items-center">
              <div className="min-w-0 md:col-span-4"><SectionLabel>Relevant Standards & Protocols</SectionLabel></div>
              <div className="flex min-w-0 flex-wrap gap-x-4 gap-y-3 sm:gap-x-7 sm:gap-y-4 md:col-span-7 md:col-start-6">
                {service.standards.map((item) => (
                  <span key={item} className="text-[clamp(1.2rem,2.5vw,2rem)] font-medium tracking-[-0.025em] sm:tracking-[-0.03em]">{item}</span>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {slug === "testing-commissioning" ? (
        <section className="py-16 sm:py-20 md:py-28">
          <Container>
            <div className="grid gap-8 sm:gap-10 md:grid-cols-12">
              <div className="min-w-0 md:col-span-4">
                <SectionLabel>Field Equipment</SectionLabel>
                <h2 className="mt-5 text-[clamp(2.05rem,4vw,3.6rem)] font-medium leading-[1] tracking-[-0.042em] sm:mt-6 md:tracking-[-0.045em]">Tools for electrical testing.</h2>
              </div>
              <div className="min-w-0 md:col-span-7 md:col-start-6">
                {equipment.map((item) => (
                  <p key={item} className="m-0 border-t border-[var(--rule)] py-4 text-[0.96rem] font-medium leading-6 last:border-b sm:text-[0.98rem]">{item}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {relatedProjects.length ? (
        <section className="py-16 sm:py-20 md:py-28">
          <Container>
            <SectionLabel>Related Projects</SectionLabel>
            <div className="mt-6 grid gap-0 sm:mt-8">
              {relatedProjects.map((project) => (
                <ArrowLink key={project.slug} href={`/projects/${project.slug}`} className="w-full border-t border-[var(--rule)] py-4 text-[1rem] last:border-b sm:py-5 sm:text-lg">
                  {project.name} — {project.voltage.join(" / ")}
                </ArrowLink>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-[var(--graphite)] py-16 text-[var(--canvas)] sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-8">
              <SectionLabel>Project Inquiry</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.045em] sm:mt-6 md:tracking-[-0.05em]">
                Need support for a {service.title.toLowerCase()} scope?
              </h2>
            </div>
            <div className="min-w-0 md:col-span-4"><PrimaryAction href={inquiryHref} tone="light">Send Project Requirement</PrimaryAction></div>
          </div>
        </Container>
      </section>
    </>
  );
}
