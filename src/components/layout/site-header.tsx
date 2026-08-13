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
      <Container className="relative flex h-[76px] items-center justify-between">
        <Link href="/" className="inline-flex min-h-12 items-center gap-2" aria-label="AFAAQ ARAB home">
          <span className="text-[0.98rem] font-semibold tracking-[0.25em]">AFAAQ</span>
          <span className="text-[0.68rem] font-semibold tracking-[0.22em] text-[var(--muted)]">ARAB</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="m-0 flex list-none items-center gap-8 p-0">
            {nav.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative inline-flex min-h-12 items-center text-sm font-medium after:absolute after:bottom-2.5 after:left-0 after:h-px after:w-0 after:bg-[var(--ink)] after:transition-[width] after:duration-[var(--motion-ui)] hover:after:w-full focus-visible:after:w-full"
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
