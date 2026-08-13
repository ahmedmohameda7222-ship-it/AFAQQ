import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";

export default function HomePage() {
  return (
    <Container className="py-24 md:py-32">
      <div className="max-w-3xl">
        <h1 className="m-0 text-[clamp(2.6rem,6vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.045em]">
          AFAAQ website foundation is ready for homepage implementation.
        </h1>
        <p className="mt-8 max-w-2xl text-[1.05rem] leading-7 text-[var(--muted)]">
          This temporary screen validates the global layout, typography infrastructure, navigation, accessibility and design tokens only. It is not the approved homepage composition.
        </p>
        <div className="mt-8">
          <ArrowLink href="/contact">Foundation navigation check</ArrowLink>
        </div>
      </div>
    </Container>
  );
}
