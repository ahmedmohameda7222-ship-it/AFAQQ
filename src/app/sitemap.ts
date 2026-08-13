import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
    ...services.map((service) => `/services/${service.slug}`),
    ...projects.map((project) => `/projects/${project.slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route || "/", siteUrl).toString(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/services" || route === "/projects" ? 0.9 : 0.7,
  }));
}
