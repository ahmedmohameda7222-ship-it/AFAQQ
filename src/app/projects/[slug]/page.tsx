import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { ProjectMedia } from "@/components/afaaq/project-media";
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
  const projectNumber = String(currentIndex + 1).padStart(2, "0");
  const projectMeta = [project.location, project.year].filter(Boolean).join(" · ");
  const technicalLabel = getProjectTechnicalLabel(project);
  const nextTechnicalLabel = getProjectTechnicalLabel(nextProject);
  const inquiryHref = `/contact?project=${encodeURIComponent(project.name)}&voltage=${encodeURIComponent(technicalLabel)}`;

  return (
    <>
      <section className="pb-12 pt-12 sm:pb-14 sm:pt-14 md:pb-20 md:pt-20">
        <Container>
          <SectionLabel>Project / {projectNumber}</SectionLabel>
          <div className="mt-5 grid gap-6 sm:mt-6 sm:gap-8 md:grid-cols-12 md:items-end">
            <h1 className="m-0 min-w-0 max-w-4xl text-[clamp(2.55rem,6vw,5.3rem)] font-medium leading-[0.97] tracking-[-0.048em] md:col-span-8 md:leading-[0.96] md:tracking-[-0.052em]">{project.name}</h1>
            <div className="min-w-0 md:col-span-4">
              {technicalLabel ? (
                <p className="font-technical m-0 text-[clamp(1.45rem,3.2vw,2.75rem)] font-medium tracking-[-0.035em] md:tracking-[-0.04em]">{technicalLabel}</p>
              ) : null}
              {projectMeta ? <p className="font-technical mb-0 mt-2 text-[0.78rem] leading-5 text-[var(--muted)] sm:mt-3">{projectMeta}</p> : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20 md:pb-28">
        <Container>
          <ProjectMedia
            project={project}
            priority
            sizes="(max-width: 767px) calc(100vw - 2.5rem), calc(100vw - 3rem)"
            className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/8] md:min-h-[28rem]"
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-28">
        <Container>
          <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
            <div className="min-w-0 md:col-span-4">
              <SectionLabel>Project Scope</SectionLabel>
              <p className="mt-5 max-w-md text-[1.02rem] leading-7 text-[var(--muted)] sm:mt-6 md:text-[1.05rem] md:leading-8">{project.summary}</p>
              {project.relationship ? (
                <div className="mt-7 border-t border-[var(--rule)] pt-5 sm:mt-8">
                  <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">Project Relationship</p>
                  <div className="mt-4">
                    <ProjectClientMark name={project.relationship} />
                  </div>
                </div>
              ) : null}
            </div>
            <div className="min-w-0 md:col-span-7 md:col-start-6">
              {project.scopes.map((scope, index) => (
                <div key={scope} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-t border-[var(--rule)] py-4 last:border-b sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4 sm:py-5">
                  <span className="font-technical text-[0.75rem] font-medium tracking-[0.08em] text-[var(--muted)] sm:text-[0.78rem]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="m-0 min-w-0 text-[1.05rem] font-medium leading-7 sm:text-[1.1rem]">{scope}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {project.systems?.length ? (
        <section className="bg-[var(--graphite)] py-16 text-[var(--canvas)] sm:py-20 md:py-28">
          <Container>
            <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
              <div className="min-w-0 md:col-span-4">
                <SectionLabel>Systems Involved</SectionLabel>
                <h2 className="mt-5 text-[clamp(2.05rem,4vw,3.6rem)] font-medium leading-[1] tracking-[-0.042em] sm:mt-6 md:tracking-[-0.045em]">Electrical, protection and control systems.</h2>
              </div>
              <div className="min-w-0 md:col-span-7 md:col-start-6">
                {project.systems.map((system) => (
                  <p key={system} className="m-0 border-t border-white/18 py-4 text-[0.98rem] font-medium leading-6 last:border-b sm:py-5 sm:text-[1rem]">{system}</p>
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
              <h2 className="mt-5 text-[clamp(2.05rem,4vw,3.8rem)] font-medium leading-[1] tracking-[-0.042em] sm:mt-6 md:tracking-[-0.045em]">{nextProject.name}</h2>
              {nextTechnicalLabel ? (
                <p className="font-technical mt-3 text-[0.82rem] text-[var(--muted)] sm:mt-4">{nextTechnicalLabel}</p>
              ) : null}
            </div>
            <div className="min-w-0 md:col-span-4 md:col-start-9"><ArrowLink href={`/projects/${nextProject.slug}`}>View Next Project</ArrowLink></div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-16 text-[var(--canvas)] sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-8">
              <SectionLabel>Project Inquiry</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.045em] sm:mt-6 md:tracking-[-0.05em]">Working on a similar electrical project?</h2>
            </div>
            <div className="min-w-0 md:col-span-4"><PrimaryAction href={inquiryHref} tone="light">Send Project Requirement</PrimaryAction></div>
          </div>
        </Container>
      </section>
    </>
  );
}
