/* eslint-disable @next/next/no-img-element */

import type { Project } from "@/content/projects";

type ProjectMediaProps = {
  project: Project;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ProjectMedia({ project, className = "", imageClassName = "", priority = false }: ProjectMediaProps) {
  return (
    <div className={`relative overflow-hidden bg-[#d8d7d1] ${className}`}>
      <img
        src={project.image}
        alt={project.imageAlt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        referrerPolicy="no-referrer"
        className={`h-full w-full object-cover ${imageClassName}`}
        style={{ objectPosition: project.imagePosition }}
      />
    </div>
  );
}
