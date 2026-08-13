import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { verifiedProjects } from "@/content/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const publicServices = services.filter((service) => service.status === "verified");

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/about", changeFrequency: "yearly", priority: 0.7 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/projects", changeFrequency: "monthly", priority: 0.9 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
    ...publicServices.map((service) => ({
      path: `/services/${service.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    ...verifiedProjects.map((project) => ({
      path: `/projects/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency,
    priority,
  }));
}
