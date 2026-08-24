import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectFactsPanel } from "@/components/afaaq/project-facts-panel";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { getProject, getProjectTechnicalLabel, projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({ title: project.name, description: project.summary, path: `/projects/${slug}` });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const technicalLabel = getProjectTechnicalLabel(project);
  const nextTechnicalLabel = getProjectTechnicalLabel(nextProject);
  const inquiryHref = `/contact?project=${encodeURIComponent(project.name)}&voltage=${encodeURIComponent(technicalLabel)}`;

  return (
    <>
      <section className="pb-10 pt-12 sm:pb-12 sm:pt-14 md:pb-16 md:pt-20">
        <Container>
          <SectionLabel>Project Reference</SectionLabel>
          <h1 className="font-display mt-5 max-w-4xl text-[clamp(2.55rem,6vw,5.1rem)] font-semibold leading-[0.97] tracking-[-0.04em] sm:mt-6">
            {project.name}
          </h1>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20 md:pb-24">
        <Container>
          <ProjectFactsPanel project={project} />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-28">
        <Container>
          <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
            <div className="min-w-0 md:col-span-4">
              <SectionLabel>Project Scope</SectionLabel>
              <p className="mt-5 max-w-md text-[1.02rem] leading-7 text-[var(--muted)] sm:mt-6 md:text-[1.05rem] md:leading-8">
                {project.summary}
              </p>
            </div>
            <div className="min-w-0 md:col-span-7 md:col-start-6">
              {project.scopes.map((scope) => (
                <p
                  key={scope}
                  className="m-0 border-t border-[var(--rule)] py-5 text-[1.05rem] font-medium leading-7 last:border-b sm:py-6 sm:text-[1.1rem]"
                >
                  {scope}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {project.systems?.length ? (
        <section className="bg-[var(--brand-deep-navy)] py-16 text-white sm:py-20 md:py-28">
          <Container>
            <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
              <div className="min-w-0 md:col-span-4">
                <SectionLabel>Systems Involved</SectionLabel>
                <h2 className="font-display mt-5 text-[clamp(2.05rem,4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.035em] sm:mt-6">
                  Electrical, protection and control systems.
                </h2>
              </div>
              <div className="min-w-0 md:col-span-7 md:col-start-6">
                {project.systems.map((system) => (
                  <p key={system} className="m-0 border-t border-white/18 py-4 text-[0.98rem] font-medium leading-6 last:border-b sm:py-5 sm:text-[1rem]">
                    {system}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-16 sm:py-20 md:py-28">
        <Container>
          <div className="grid gap-7 sm:gap-10 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-7">
              <SectionLabel>Next Project</SectionLabel>
              <h2 className="font-display mt-5 text-[clamp(2.05rem,4vw,3.8rem)] font-semibold leading-[1] tracking-[-0.035em] sm:mt-6">
                {nextProject.name}
              </h2>
              {nextTechnicalLabel ? (
                <p className="font-technical mt-3 text-[0.82rem] text-[var(--muted)] sm:mt-4">{nextTechnicalLabel}</p>
              ) : null}
            </div>
            <div className="min-w-0 md:col-span-4 md:col-start-9">
              <ArrowLink href={`/projects/${nextProject.slug}`}>View Next Project</ArrowLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-deep-navy)] py-16 text-white sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-8">
              <SectionLabel>Project Inquiry</SectionLabel>
              <h2 className="font-display mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.04em] sm:mt-6">
                Working on a similar electrical project?
              </h2>
            </div>
            <div className="min-w-0 md:col-span-4">
              <PrimaryAction href={inquiryHref} tone="light">Send Project Requirement</PrimaryAction>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
