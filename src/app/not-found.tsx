import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested AFAAQ ARAB page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return (
    <section className="py-20 sm:py-24 md:py-32">
      <Container>
        <div className="max-w-4xl">
          <SectionLabel>404 / Page Not Found</SectionLabel>
          <h1 className="mt-5 text-[clamp(2.7rem,6vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.05em] sm:mt-6">
            This page is not available.
          </h1>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-7 text-[var(--muted)] md:text-[1.08rem] md:leading-8">
            The link may be outdated or the address may have been entered incorrectly. Continue to AFAAQ project experience or return to the homepage.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-6">
            <PrimaryAction href="/">Return to Homepage</PrimaryAction>
            <ArrowLink href="/projects">View Major Projects</ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
