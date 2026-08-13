import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { ScrollRevealManager } from "@/components/layout/scroll-reveal-manager";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { company } from "@/content/company";
import { getSiteUrl } from "@/lib/site-url";
import "@/styles/globals.css";

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

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${company.name} | Electrical Engineering & Contracting`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  icons: {
    icon: [{ url: "/brand/afaaq-mark.svg", type: "image/svg+xml" }],
    shortcut: "/brand/afaaq-mark.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>
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
