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
    <header className="sticky top-0 z-50 border-b border-[var(--rule)] bg-white/96 backdrop-blur-[10px]">
      <Container className="relative flex h-[86px] min-w-0 items-center justify-between gap-3 sm:h-[92px]">
        <Link href="/" className="inline-flex min-h-12 min-w-0 items-center gap-3.5 sm:gap-4" aria-label="AFAAQ ARAB home">
          <Image
            src="/brand/afaaq-mark.svg"
            alt=""
            width={72}
            height={48}
            priority
            className="w-[60px] shrink-0 object-contain sm:w-[70px]"
          />
          <span className="min-w-0 whitespace-nowrap text-[1.03rem] font-semibold tracking-[0.095em] text-[var(--brand-deep-navy)] sm:text-[1.14rem] sm:tracking-[0.11em]">
            AFAAQ ARAB
          </span>
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
                    className={`relative inline-flex min-h-12 items-center text-[1.03rem] font-semibold tracking-[-0.008em] text-[var(--ink)] after:absolute after:bottom-2 after:left-0 after:h-0.5 after:bg-[var(--brand-blue)] after:transition-[width] after:duration-[var(--motion-ui)] hover:text-[var(--brand-navy)] hover:after:w-full focus-visible:text-[var(--brand-navy)] focus-visible:after:w-full ${active ? "text-[var(--brand-navy)] after:w-full" : "after:w-0"}`}
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
