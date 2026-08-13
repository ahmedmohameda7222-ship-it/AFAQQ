"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { getProjectTechnicalLabel, type Project } from "@/content/projects";
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { ProjectMedia } from "@/components/afaaq/project-media";

type ProjectShowcaseRailProps = {
  projects: readonly Project[];
  allProjects: readonly Project[];
};

export function ProjectShowcaseRail({ projects, allProjects }: ProjectShowcaseRailProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hoveredOrFocused, setHoveredOrFocused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);

  const pauseForInteraction = useCallback(() => {
    setInteractionPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setInteractionPaused(false), 10000);
  }, []);

  const move = useCallback((direction: 1 | -1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const firstCard = viewport.querySelector<HTMLElement>("[data-project-card]");
    const step = firstCard ? firstCard.offsetWidth + 24 : Math.max(viewport.clientWidth * 0.72, 280);
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;

    if (direction > 0 && viewport.scrollLeft >= maxScroll - step * 0.35) {
      viewport.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && viewport.scrollLeft <= step * 0.35) {
      viewport.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }

    viewport.scrollBy({ left: step * direction, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (hoveredOrFocused || interactionPaused || reduceMotion.matches || projects.length < 2) return;

    const timer = window.setInterval(() => move(1), 6200);
    return () => window.clearInterval(timer);
  }, [hoveredOrFocused, interactionPaused, move, projects.length]);

  useEffect(() => () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  if (projects.length === 0) return null;

  return (
    <div className="mt-9 md:mt-12">
      <div className="mb-5 flex items-center justify-between gap-4 border-t border-[var(--rule)] pt-5 sm:gap-5">
        <p className="font-technical m-0 text-[0.78rem] font-medium uppercase leading-5 tracking-[0.08em] text-[var(--muted)]">
          Major Project Portfolio
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => { pauseForInteraction(); move(-1); }}
            className="inline-flex h-12 w-12 items-center justify-center border border-[var(--rule)] bg-transparent text-[var(--ink)] transition-colors hover:border-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-blue)]"
            aria-label="Previous projects"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
              <path d="M16 10H5M9 6l-4 4 4 4" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => { pauseForInteraction(); move(1); }}
            className="inline-flex h-12 w-12 items-center justify-center border border-[var(--rule)] bg-transparent text-[var(--ink)] transition-colors hover:border-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-blue)]"
            aria-label="Next projects"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1" fill="none">
              <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-3 pr-[var(--gutter-mobile)] [scrollbar-width:none] [scroll-padding-left:0] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setHoveredOrFocused(true)}
        onMouseLeave={() => setHoveredOrFocused(false)}
        onPointerDown={pauseForInteraction}
        onWheel={pauseForInteraction}
        onFocusCapture={() => setHoveredOrFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHoveredOrFocused(false);
        }}
        aria-label="AFAAQ major projects"
        aria-roledescription="carousel"
      >
        {projects.map((project) => {
          const projectIndex = allProjects.findIndex((item) => item.slug === project.slug);
          const projectNumber = String(projectIndex + 1).padStart(2, "0");
          const technicalLabel = getProjectTechnicalLabel(project);

          return (
            <article
              key={project.slug}
              data-project-card
              className="w-[82vw] max-w-[430px] shrink-0 snap-start sm:w-[56vw] lg:w-[31vw]"
            >
              <Link href={`/projects/${project.slug}`} className="group block min-w-0">
                <ProjectMedia
                  project={project}
                  sizes="(max-width: 639px) 82vw, (max-width: 1023px) 56vw, 31vw"
                  className="aspect-[4/3]"
                  imageClassName="transition-transform duration-500 group-hover:scale-[1.015]"
                />

                <div className="mt-5 border-t border-[var(--rule)] pt-4">
                  <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-2">
                    <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
                      Project {projectNumber}
                    </p>
                    {technicalLabel ? (
                      <p className="font-technical m-0 shrink-0 text-[0.82rem] font-medium text-[var(--muted)]">
                        {technicalLabel}
                      </p>
                    ) : null}
                  </div>

                  <h3 className="mb-0 mt-3 text-[clamp(1.45rem,2.4vw,2rem)] font-medium leading-[1.06] tracking-[-0.03em] group-hover:text-[var(--brand-navy)]">
                    {project.name}
                  </h3>

                  {project.relationship ? (
                    <div className="mt-4">
                      <ProjectClientMark name={project.relationship} compact />
                    </div>
                  ) : null}

                  <p className="mb-0 mt-4 line-clamp-2 text-[0.94rem] leading-6 text-[var(--muted)]">
                    {project.scopes.join(" · ")}
                  </p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
