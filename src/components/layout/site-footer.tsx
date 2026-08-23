import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/company";
import { Container } from "./container";

const footerLinkClass = "inline-flex min-h-11 items-center text-white/90 transition-colors hover:text-white";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--graphite)] py-12 text-[#f4f3ef] md:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="font-technical m-0 text-[0.82rem] font-medium uppercase leading-5 tracking-[0.09em] text-white/68">
              AFAAQ ARAB / Engineering & Contracting
            </p>
            <p className="mt-4 max-w-md text-[1rem] leading-7 text-white/76">
              Electrical engineering and contracting for power-system installation, testing, commissioning, protection and control.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 text-[0.98rem] leading-6 sm:grid-cols-3 sm:gap-8 md:col-span-7 md:col-start-6">
            <div>
              <p className="font-technical mb-2 text-[0.82rem] font-medium uppercase leading-5 tracking-[0.08em] text-white/64">Navigate</p>
              <div className="grid">
                <Link href="/services" className={footerLinkClass}>Services</Link>
                <Link href="/projects" className={footerLinkClass}>Projects</Link>
                <Link href="/about" className={footerLinkClass}>About</Link>
                <Link href="/contact" className={footerLinkClass}>Contact</Link>
              </div>
            </div>
            <div>
              <p className="font-technical mb-2 text-[0.82rem] font-medium uppercase leading-5 tracking-[0.08em] text-white/64">Direct</p>
              <div className="grid">
                <a href={`mailto:${company.email}`} className={`${footerLinkClass} break-all`}>{company.email}</a>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className={footerLinkClass}>{company.phone}</a>
              </div>
            </div>
            <div>
              <p className="font-technical mb-2 text-[0.82rem] font-medium uppercase leading-5 tracking-[0.08em] text-white/64">Office</p>
              <div className="grid">
                <span className="inline-flex min-h-11 items-center text-white/90">{company.location}</span>
                <Link href="/contact" className={footerLinkClass}>Discuss a project</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/16 pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-12 md:pt-7">
          <Link href="/" className="inline-flex min-h-12 items-center gap-3" aria-label="AFAAQ ARAB home">
            <Image
              src="/brand/afaaq-mark.svg"
              alt=""
              width={48}
              height={32}
              className="w-11 shrink-0 object-contain"
            />
            <span className="text-[0.9rem] font-semibold tracking-[0.13em]">AFAAQ ARAB</span>
          </Link>
          <p className="m-0 max-w-2xl text-[0.86rem] leading-6 text-white/58 sm:text-right">
            © {year} {company.legalName} · {company.location}
          </p>
        </div>
      </Container>
    </footer>
  );
}
