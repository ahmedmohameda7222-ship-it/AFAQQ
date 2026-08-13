import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rule)]/70 bg-[color:var(--canvas)]/95 backdrop-blur-[8px]">
      <Container className="relative flex h-[82px] min-w-0 items-center justify-between gap-3">
        <Link href="/" className="inline-flex min-h-12 min-w-0 items-center gap-2.5 sm:gap-3.5" aria-label="AFAAQ ARAB home">
          <Image
            src="/brand/afaaq-mark.svg"
            alt=""
            width={54}
            height={36}
            loading="eager"
            className="w-12 shrink-0 object-contain sm:w-[54px]"
          />
          <span className="min-w-0 whitespace-nowrap text-[0.9rem] font-semibold tracking-[0.11em] sm:text-[1.04rem] sm:tracking-[0.15em]">AFAAQ ARAB</span>
        </Link>
        <DesktopNav />
        <MobileNav />
      </Container>
    </header>
  );
}
