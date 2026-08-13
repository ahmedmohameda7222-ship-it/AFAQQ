import type { Metadata } from "next";
import { company } from "@/content/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.invalid";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteUrl);
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
