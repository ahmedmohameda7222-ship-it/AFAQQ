import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--graphite)] py-14 text-[#f4f3ef] md:py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="font-technical m-0 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white/45">
              AFAAQ ARAB / Engineering & Contracting
            </p>
            <p className="mt-6 max-w-md text-sm leading-6 text-white/65">
              Electrical engineering and contracting for power-system installation, testing, commissioning, protection and control.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:col-span-6 md:grid-cols-3">
            <div>
              <p className="font-technical mb-3 text-[0.7rem] uppercase tracking-[0.1em] text-white/45">Navigate</p>
              <div className="grid gap-3">
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
              </div>
            </div>
            <div>
              <p className="font-technical mb-3 text-[0.7rem] uppercase tracking-[0.1em] text-white/45">Contact</p>
              <div className="grid gap-3">
                <Link href="/contact">Project inquiry</Link>
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="font-technical mt-14 border-t border-white/15 pt-7 text-[0.68rem] uppercase tracking-[0.1em] text-white/45">
          AFAAQ ARAB FOR ENGINEERING & CONTRACTING
        </div>

        <div className="mt-12 border-t border-white/15 pt-10 md:mt-16 md:pt-14">
          <div className="flex items-center gap-4 overflow-hidden sm:gap-6 md:gap-8 lg:gap-10">
            <Image
              src="/brand/afaaq-mark.svg"
              alt="AFAAQ ARAB logo"
              width={300}
              height={200}
              className="h-auto w-[clamp(72px,21vw,120px)] shrink-0 object-contain md:w-[clamp(145px,15vw,250px)]"
            />
            <p className="m-0 min-w-0 whitespace-nowrap text-[clamp(1.85rem,9.5vw,4rem)] font-semibold leading-[0.82] tracking-[-0.055em] text-[#f4f3ef] md:text-[clamp(5rem,9vw,10.5rem)]">
              AFAAQ ARAB
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
