import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description: "Selected AFAAQ ARAB electrical engineering, protection, SCADA, testing and commissioning projects.",
  path: "/projects",
});

const flagship = projects.find((project) => project.slug === "delta-regional-control-center");
const others = projects.filter((project) => project.slug !== "delta-regional-control-center");

export default function ProjectsPage() {
  return (
    <>
      <section className="pb-20 pt-14 md:pb-28 md:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionLabel>Projects</SectionLabel>
              <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,5.3rem)] font-medium leading-[0.96] tracking-[-0.052em]">
                Electrical work across power and control systems.
              </h1>
            </div>
            <p className="m-0 max-w-lg text-[1.05rem] leading-8 text-[var(--muted)] md:col-span-4">
              Selected AFAAQ projects covering testing, commissioning, protection, SCADA and electrical installation.
            </p>
          </div>
        </Container>
      </section>

      {flagship ? (
        <section className="pb-20 md:pb-28">
          <Container>
            <div className="grid gap-8 border-t border-[var(--rule)] pt-8 md:grid-cols-12 md:pt-10">
              <div className="md:col-span-8">
                <SectionLabel>Featured Project</SectionLabel>
                <h2 className="mt-6 max-w-3xl text-[clamp(2.5rem,5vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.05em]">{flagship.name}</h2>
                <div className="project-media-placeholder mt-10 aspect-[16/10] min-h-[24rem] bg-[var(--graphite)]" aria-hidden="true" />
              </div>
              <div className="md:col-span-4 md:pt-16">
                <p className="m-0 text-[clamp(1.8rem,3.5vw,3rem)] font-medium tracking-[-0.045em]">{flagship.voltage.join(" / ")}</p>
                <p className="mt-7 max-w-md text-[1rem] leading-7 text-[var(--muted)]">{flagship.summary}</p>
                <div className="mt-8"><ArrowLink href={`/projects/${flagship.slug}`}>View Project Scope</ArrowLink></div>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-20 md:py-28">
        <Container>
          <SectionLabel>Selected Work</SectionLabel>
          <div className="mt-10 grid gap-14 md:grid-cols-12 md:gap-x-8 md:gap-y-20">
            {others.map((project, index) => (
              <article key={project.slug} className={index % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:pt-20"}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className={`project-media-placeholder bg-[#d8d7d1] ${index % 2 === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`} aria-hidden="true" />
                  <div className="mt-5 flex items-start justify-between gap-6 border-t border-[var(--rule)] pt-4">
                    <div>
                      <h2 className="m-0 text-[clamp(1.7rem,3vw,2.7rem)] font-medium leading-[1] tracking-[-0.04em]">{project.name}</h2>
                      <p className="mb-0 mt-4 max-w-lg text-sm leading-6 text-[var(--muted)]">{project.summary}</p>
                    </div>
                    <p className="m-0 shrink-0 text-sm font-medium text-[var(--muted)]">{project.voltage.join(" / ")}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-20 text-[var(--canvas)] md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionLabel>Similar Project?</SectionLabel>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,5vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.05em]">Send us the scope and voltage level.</h2>
            </div>
            <div className="md:col-span-4"><PrimaryAction href="/contact" tone="light">Discuss a Project Scope</PrimaryAction></div>
          </div>
        </Container>
      </section>
    </>
  );
}
