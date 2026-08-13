import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { getProject, projects } from "@/content/projects";
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
  const inquiryHref = `/contact?project=${encodeURIComponent(project.name)}&voltage=${encodeURIComponent(project.voltage.join(" / "))}`;

  return (
    <>
      <section className="pb-14 pt-14 md:pb-20 md:pt-20">
        <Container>
          <SectionLabel>Project</SectionLabel>
          <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end">
            <h1 className="m-0 max-w-4xl text-[clamp(3rem,6vw,5.3rem)] font-medium leading-[0.96] tracking-[-0.052em] md:col-span-8">{project.name}</h1>
            <div className="md:col-span-4">
              <p className="m-0 text-[clamp(1.8rem,3.5vw,3rem)] font-medium tracking-[-0.045em]">{project.voltage.join(" / ")}</p>
              {project.location ? <p className="mb-0 mt-3 text-sm text-[var(--muted)]">{project.location}</p> : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="project-media-placeholder aspect-[16/8] min-h-[28rem] bg-[var(--graphite)]" aria-hidden="true" />
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Project Scope</SectionLabel>
              <p className="mt-6 max-w-md text-[1.05rem] leading-8 text-[var(--muted)]">{project.summary}</p>
              {project.relationship ? (
                <div className="mt-8 border-t border-[var(--rule)] pt-5">
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Project Relationship</p>
                  <p className="mb-0 mt-3 text-lg font-medium">{project.relationship}</p>
                </div>
              ) : null}
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {project.scopes.map((scope, index) => (
                <div key={scope} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-[var(--rule)] py-5 last:border-b">
                  <span className="text-xs font-semibold tracking-[0.1em] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="m-0 text-[1.1rem] font-medium leading-7">{scope}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {project.systems?.length ? (
        <section className="bg-[var(--graphite)] py-20 text-[var(--canvas)] md:py-28">
          <Container>
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <SectionLabel>Systems Involved</SectionLabel>
                <h2 className="mt-6 text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-[1] tracking-[-0.045em]">Electrical, protection and control systems.</h2>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                {project.systems.map((system) => (
                  <p key={system} className="m-0 border-t border-white/18 py-5 text-[1rem] font-medium last:border-b">{system}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionLabel>Next Project</SectionLabel>
              <h2 className="mt-6 text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1] tracking-[-0.045em]">{nextProject.name}</h2>
              <p className="mt-4 text-[var(--muted)]">{nextProject.voltage.join(" / ")}</p>
            </div>
            <div className="md:col-span-4 md:col-start-9"><ArrowLink href={`/projects/${nextProject.slug}`}>View Next Project</ArrowLink></div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-20 text-[var(--canvas)] md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionLabel>Project Inquiry</SectionLabel>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,5vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.05em]">Working on a similar electrical project?</h2>
            </div>
            <div className="md:col-span-4"><PrimaryAction href={inquiryHref} tone="light">Send Project Requirement</PrimaryAction></div>
          </div>
        </Container>
      </section>
    </>
  );
}
