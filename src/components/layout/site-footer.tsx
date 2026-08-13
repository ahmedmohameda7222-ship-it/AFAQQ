import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--graphite)] py-12 text-[#f4f3ef] md:py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="font-technical m-0 text-[0.78rem] font-medium uppercase leading-5 tracking-[0.1em] text-white/60">
              AFAAQ ARAB / Engineering & Contracting
            </p>
            <p className="mt-4 max-w-md text-[0.95rem] leading-6 text-white/72">
              Electrical engineering and contracting for power-system installation, testing, commissioning, protection and control.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-[0.95rem] leading-6 text-white/90 md:col-span-6 md:grid-cols-3">
            <div>
              <p className="font-technical mb-3 text-[0.78rem] uppercase leading-5 tracking-[0.08em] text-white/60">Navigate</p>
              <div className="grid gap-2.5">
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
              </div>
            </div>
            <div>
              <p className="font-technical mb-3 text-[0.78rem] uppercase leading-5 tracking-[0.08em] text-white/60">Contact</p>
              <div className="grid gap-2.5">
                <Link href="/contact">Project inquiry</Link>
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-10 md:mt-12 md:pt-12">
          <div className="flex items-center justify-center gap-4 overflow-hidden sm:gap-6 md:gap-8 lg:gap-10">
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
