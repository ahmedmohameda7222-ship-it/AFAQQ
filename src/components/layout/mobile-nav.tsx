"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

const nav = [
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function MobileNav() {
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
          className="absolute inset-x-0 top-[76px] border-b border-[var(--rule)] bg-[var(--canvas)] px-[var(--gutter-mobile)] pb-8 pt-4"
        >
          <nav aria-label="Mobile navigation">
            <ul className="m-0 list-none p-0">
              {nav.map(([label, href]) => (
                <li key={href} className="border-t border-[var(--rule)] last:border-b">
                  <Link
                    href={href}
                    className="flex min-h-14 items-center justify-between text-lg font-medium"
                    onClick={() => setOpen(false)}
                  >
                    <span>{label}</span>
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
