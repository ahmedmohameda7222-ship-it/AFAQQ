import { JsonLd } from "@/components/seo/json-ld";
import { getProject } from "@/content/projects";
import { getSiteUrl } from "@/lib/site-url";

type ProjectLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export default async function ProjectLayout({ children, params }: ProjectLayoutProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return children;

  const siteUrl = getSiteUrl();
  const projectUrl = new URL(`/projects/${project.slug}`, siteUrl).toString();
  const organizationId = new URL("/#organization", siteUrl).toString();

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Project",
    "@id": `${projectUrl}#project`,
    name: project.name,
    description: project.summary,
    url: projectUrl,
    parentOrganization: {
      "@id": organizationId,
    },
    areaServed: project.location ?? "Egypt",
    keywords: [...project.voltage, ...project.scopes].join(", "),
  };

  return (
    <>
      <JsonLd data={projectSchema} />
      {children}
    </>
  );
}
