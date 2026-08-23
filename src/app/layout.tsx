import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { ScrollRevealManager } from "@/components/layout/scroll-reveal-manager";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { company } from "@/content/company";
import { buildMetadata } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";
import "@/styles/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = getSiteUrl();
const rootMetadata = buildMetadata({
  title: "Electrical Engineering & Contracting",
  description: company.description,
  path: "/",
});

export const metadata: Metadata = {
  ...rootMetadata,
  metadataBase: siteUrl,
  title: {
    default: `${company.name} | Electrical Engineering & Contracting`,
    template: `%s | ${company.name}`,
  },
  icons: {
    icon: [{ url: "/brand/afaaq-mark.svg", type: "image/svg+xml" }],
    shortcut: "/brand/afaaq-mark.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": new URL("/#organization", siteUrl).toString(),
  name: company.name,
  legalName: company.legalName,
  url: new URL("/", siteUrl).toString(),
  logo: new URL("/brand/afaaq-mark.svg", siteUrl).toString(),
  description: company.description,
  foundingDate: String(company.founded),
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  areaServed: "Egypt",
  knowsAbout: [
    "Electrical installation",
    "Testing and commissioning",
    "Protection and control",
    "SCADA and automation",
    "Power systems",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "project inquiries",
    email: company.email,
    telephone: company.phone,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <JsonLd data={organizationSchema} />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 bg-[var(--ink)] px-4 py-3 text-sm text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ScrollRevealManager />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
