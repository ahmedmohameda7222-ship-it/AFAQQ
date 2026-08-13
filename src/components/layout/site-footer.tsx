import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--graphite)] py-14 text-[#f4f3ef] md:py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <div className="flex items-center gap-5 md:gap-7">
              <Image
                src="/brand/afaaq-mark-approved.png"
                alt=""
                width={260}
                height={173}
                className="shrink-0 object-contain"
                style={{ width: "clamp(180px, 18vw, 260px)", height: "auto" }}
              />
              <p className="m-0 text-[1rem] font-semibold tracking-[0.17em]">AFAAQ ARAB</p>
            </div>
            <p className="mt-6 max-w-md text-sm leading-6 text-white/65">
              Electrical engineering and contracting for power-system installation, testing, commissioning, protection and control.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:col-span-6 md:grid-cols-3">
            <div>
              <p className="mb-3 text-white/45">Navigate</p>
              <div className="grid gap-3">
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
              </div>
            </div>
            <div>
              <p className="mb-3 text-white/45">Contact</p>
              <div className="grid gap-3">
                <Link href="/contact">Project inquiry</Link>
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-white/15 pt-7 text-[0.72rem] tracking-[0.12em] text-white/45">
          AFAAQ ARAB FOR ENGINEERING & CONTRACTING
        </div>
      </Container>
    </footer>
  );
}
