import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/company";
import { Container } from "./container";

const footerLinkClass = "inline-flex min-h-11 items-center";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--graphite)] py-11 text-[#f4f3ef] md:py-14">
      <Container>
        <div className="grid gap-9 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-technical m-0 text-[0.78rem] font-medium uppercase leading-5 tracking-[0.1em] text-white/60">
              AFAAQ ARAB / Engineering & Contracting
            </p>
            <p className="mt-4 max-w-md text-[0.95rem] leading-6 text-white/72">
              Electrical engineering and contracting for power-system installation, testing, commissioning, protection and control.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 text-[0.95rem] leading-6 text-white/90 sm:grid-cols-3 sm:gap-8 md:col-span-7">
            <div>
              <p className="font-technical mb-2 text-[0.78rem] uppercase leading-5 tracking-[0.08em] text-white/60">Navigate</p>
              <div className="grid">
                <Link href="/services" className={footerLinkClass}>Services</Link>
                <Link href="/projects" className={footerLinkClass}>Projects</Link>
                <Link href="/about" className={footerLinkClass}>About</Link>
                <Link href="/contact" className={footerLinkClass}>Contact</Link>
              </div>
            </div>
            <div>
              <p className="font-technical mb-2 text-[0.78rem] uppercase leading-5 tracking-[0.08em] text-white/60">Direct</p>
              <div className="grid">
                <a href={`mailto:${company.email}`} className={`${footerLinkClass} break-all`}>{company.email}</a>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className={footerLinkClass}>{company.phone}</a>
              </div>
            </div>
            <div>
              <p className="font-technical mb-2 text-[0.78rem] uppercase leading-5 tracking-[0.08em] text-white/60">Office</p>
              <div className="grid">
                <span className="inline-flex min-h-11 items-center">{company.location}</span>
                <Link href="/contact" className={footerLinkClass}>Discuss a project</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 border-t border-white/15 pt-9 md:mt-12 md:pt-12">
          <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-5 md:flex md:justify-center md:gap-8 lg:gap-10">
            <Image
              src="/brand/afaaq-mark.svg"
              alt="AFAAQ ARAB logo"
              width={300}
              height={200}
              className="h-auto w-14 object-contain sm:w-20 md:w-[clamp(145px,15vw,250px)] md:shrink-0"
            />
            <p className="m-0 min-w-0 whitespace-nowrap text-[clamp(1.5rem,7.5vw,2.5rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-[#f4f3ef] sm:text-[clamp(2rem,7vw,3.5rem)] md:text-[clamp(5rem,9vw,10.5rem)] md:leading-[0.82] md:tracking-[-0.055em]">
              AFAAQ ARAB
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
