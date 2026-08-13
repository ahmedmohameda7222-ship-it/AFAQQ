import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--graphite)] py-16 text-[#f4f3ef] md:py-20">
      <Container>
        <div className="grid gap-10 border-b border-white/15 pb-14 md:grid-cols-12 md:items-center md:gap-10 md:pb-16">
          <div className="md:col-span-4">
            <img
              src="/brand/afaaq-mark-approved.png"
              alt="AFAAQ ARAB"
              width="460"
              height="307"
              className="block h-auto w-[clamp(230px,28vw,460px)] object-contain"
            />
          </div>
          <div className="md:col-span-8">
            <p className="m-0 text-[clamp(3.6rem,8.5vw,8.8rem)] font-semibold leading-[0.82] tracking-[-0.055em] text-[#f4f3ef]">
              AFAAQ ARAB
            </p>
            <p className="mb-0 mt-7 max-w-2xl text-[1rem] leading-7 text-white/62 md:text-[1.08rem]">
              Electrical engineering and contracting for power-system installation, testing, commissioning, protection and control.
            </p>
          </div>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-12 md:py-12">
          <div className="md:col-span-5">
            <p className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/42">
              AFAAQ ARAB for Engineering & Contracting
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:col-span-6 md:col-start-7 md:grid-cols-3">
            <div>
              <p className="mb-3 mt-0 text-white/45">Navigate</p>
              <div className="grid gap-3">
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
              </div>
            </div>
            <div>
              <p className="mb-3 mt-0 text-white/45">Contact</p>
              <div className="grid gap-3">
                <Link href="/contact">Project inquiry</Link>
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
