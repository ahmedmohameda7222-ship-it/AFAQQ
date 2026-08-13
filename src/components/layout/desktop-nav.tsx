"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

function isCurrentSection(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav() {
  const pathname = usePathname();

  return (
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
  );
}
