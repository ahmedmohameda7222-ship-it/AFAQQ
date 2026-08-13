"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";

const nav = [
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

function isCurrentSection(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rule)]/70 bg-[color:var(--canvas)]/95 backdrop-blur-[8px]">
      <Container className="relative flex h-[82px] min-w-0 items-center justify-between gap-3">
        <Link href="/" className="inline-flex min-h-12 min-w-0 items-center gap-2.5 sm:gap-3.5" aria-label="AFAAQ ARAB home">
          <Image
            src="/brand/afaaq-mark.svg"
            alt=""
            width={54}
            height={36}
            priority
            className="w-12 shrink-0 object-contain sm:w-[54px]"
          />
          <span className="min-w-0 whitespace-nowrap text-[0.9rem] font-semibold tracking-[0.11em] sm:text-[1.04rem] sm:tracking-[0.15em]">AFAAQ ARAB</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="m-0 flex list-none items-center gap-9 p-0 lg:gap-11">
            {nav.map(([label, href]) => {
              const active = isCurrentSection(pathname, href);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-flex min-h-12 items-center text-[0.95rem] font-medium after:absolute after:bottom-2.5 after:left-0 after:h-px after:bg-[var(--brand-blue)] after:transition-[width] after:duration-[var(--motion-ui)] hover:after:w-full focus-visible:after:w-full ${active ? "after:w-full" : "after:w-0"}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <MobileNav pathname={pathname} />
      </Container>
    </header>
  );
}
