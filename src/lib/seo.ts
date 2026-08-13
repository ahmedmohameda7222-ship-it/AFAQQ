import type { Metadata } from "next";
import { company } from "@/content/company";
import { getSiteUrl } from "@/lib/site-url";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, getSiteUrl());
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      type: "website",
    },
  };
}
