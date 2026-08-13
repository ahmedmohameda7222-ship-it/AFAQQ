import type { Metadata } from "next";
import { company } from "@/content/company";
import { getSiteUrl } from "@/lib/site-url";

const SHARE_IMAGE_PATH = "/images/about/afaaq-about-16x9.webp";
const SHARE_IMAGE_WIDTH = 1672;
const SHARE_IMAGE_HEIGHT = 941;
const SHARE_IMAGE_ALT = "AFAAQ ARAB electrical engineering and contracting.";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const siteUrl = getSiteUrl();
  const url = new URL(path, siteUrl);
  const shareImageUrl = new URL(SHARE_IMAGE_PATH, siteUrl);
  const socialTitle = title.includes(company.name) ? title : `${title} | ${company.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: company.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: shareImageUrl,
          width: SHARE_IMAGE_WIDTH,
          height: SHARE_IMAGE_HEIGHT,
          alt: SHARE_IMAGE_ALT,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [shareImageUrl.toString()],
    },
  };
}
