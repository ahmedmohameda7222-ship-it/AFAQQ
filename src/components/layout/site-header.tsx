import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";

const nav = [
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rule)]/70 bg-[color:var(--canvas)]/95 backdrop-blur-[8px]">
      <Container className="relative flex h-[82px] items-center justify-between">
        <Link href="/" className="inline-flex min-h-12 items-center gap-3.5" aria-label="AFAAQ ARAB home">
          <Image
            src="/brand/afaaq-mark.svg"
            alt=""
            width={54}
            height={36}
            priority
            className="shrink-0 object-contain"
            style={{ width: "54px", height: "auto" }}
          />
          <span className="text-[0.98rem] font-semibold tracking-[0.17em] sm:text-[1.04rem]">AFAAQ ARAB</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="m-0 flex list-none items-center gap-9 p-0 lg:gap-11">
            {nav.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative inline-flex min-h-12 items-center text-[0.95rem] font-medium after:absolute after:bottom-2.5 after:left-0 after:h-px after:w-0 after:bg-[var(--brand-blue)] after:transition-[width] after:duration-[var(--motion-ui)] hover:after:w-full focus-visible:after:w-full"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav />
      </Container>
    </header>
  );
}
