import { JsonLd } from "@/components/seo/json-ld";
import { getService } from "@/content/services";
import { getSiteUrl } from "@/lib/site-url";

type ServiceLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export default async function ServiceLayout({ children, params }: ServiceLayoutProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return children;

  const siteUrl = getSiteUrl();
  const serviceUrl = new URL(`/services/${service.slug}`, siteUrl).toString();
  const organizationId = new URL("/#organization", siteUrl).toString();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    description: service.summary,
    url: serviceUrl,
    serviceType: service.title,
    category: "Electrical engineering",
    provider: {
      "@id": organizationId,
    },
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    keywords: [
      ...service.capabilities,
      ...(service.standards ?? []),
    ].join(", "),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
