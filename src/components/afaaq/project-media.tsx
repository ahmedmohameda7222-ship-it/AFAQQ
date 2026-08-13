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
  return (
    <div className={`relative min-w-0 overflow-hidden bg-[#d8d7d1] ${className}`}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes={sizes}
        quality={82}
        priority={priority}
        className={`object-cover ${imageClassName}`}
        style={{ objectPosition: project.imagePosition }}
      />
    </div>
  );
}
