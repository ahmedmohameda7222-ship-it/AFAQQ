"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

const nav = [
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

type MobileNavProps = {
  pathname: string;
};

function isCurrentSection(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav({ pathname }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-12 min-w-12 items-center justify-end text-sm font-medium"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-[82px] border-b border-[var(--rule)] bg-[var(--canvas)] px-[var(--gutter-mobile)] pb-8 pt-4"
        >
          <nav aria-label="Mobile navigation">
            <ul className="m-0 list-none p-0">
              {nav.map(([label, href]) => {
                const active = isCurrentSection(pathname, href);

                return (
                  <li key={href} className="border-t border-[var(--rule)] last:border-b">
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className="flex min-h-14 items-center justify-between text-lg font-medium"
                      onClick={() => setOpen(false)}
                    >
                      <span className={`relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-[var(--brand-blue)] ${active ? "after:block" : "after:hidden"}`}>
                        {label}
                      </span>
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                        <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
