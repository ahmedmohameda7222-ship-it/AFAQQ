import Image from "next/image";
import type { Project } from "@/content/projects";

type ProjectMediaProps = {
  project: Project;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProjectMedia({
  project,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "100vw",
}: ProjectMediaProps) {
  if (!project.image) {
    return (
      <div
        className={`relative flex min-w-0 items-end overflow-hidden bg-[var(--graphite)] text-[var(--canvas)] ${className}`}
        role="img"
        aria-label={`${project.name} project reference`}
      >
        <div className="absolute inset-x-0 top-1/3 border-t border-white/10" aria-hidden="true" />
        <div className="absolute inset-x-0 top-2/3 border-t border-white/10" aria-hidden="true" />
        <div className="relative z-10 w-full p-5 sm:p-6 md:p-8">
          <p className="font-technical m-0 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-white/55 sm:text-[0.78rem]">
            AFAAQ ARAB / Project Reference
          </p>
          <p className="mb-0 mt-3 max-w-[20ch] text-[clamp(1.45rem,3vw,2.35rem)] font-medium leading-[1.04] tracking-[-0.035em]">
            {project.name}
          </p>
          {project.technicalLabel ? (
            <p className="font-technical mb-0 mt-3 text-[0.78rem] text-white/60">{project.technicalLabel}</p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative min-w-0 overflow-hidden bg-[#d8d7d1] ${className}`}>
      <Image
        src={project.image}
        alt={project.imageAlt ?? ""}
        fill
        sizes={sizes}
        quality={82}
        priority={priority}
        className={`object-cover ${imageClassName}`}
        style={{ objectPosition: project.imagePosition ?? "center" }}
      />
    </div>
  );
}
