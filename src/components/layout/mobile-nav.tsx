"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const trigger = triggerRef.current;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusables?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  const panel = open && typeof document !== "undefined"
    ? createPortal(
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-0 bottom-0 top-[86px] z-[60] overflow-y-auto border-t border-[var(--rule)] bg-[var(--canvas)] px-[var(--gutter-mobile)] pb-[max(2rem,env(safe-area-inset-bottom))] pt-4 shadow-[0_20px_50px_rgba(17,19,21,0.10)] sm:top-[92px]"
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
                      className="flex min-h-16 items-center justify-between gap-6 text-lg font-medium"
                      onClick={() => setOpen(false)}
                    >
                      <span className={`relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-[var(--brand-blue)] ${active ? "after:block" : "after:hidden"}`}>
                        {label}
                      </span>
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none">
                        <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>,
        document.body,
      )
    : null;

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex min-h-12 min-w-12 items-center justify-end text-sm font-medium"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {panel}
    </div>
  );
}
