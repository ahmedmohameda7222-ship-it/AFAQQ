"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealManager() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const initialRevealLine = window.innerHeight * 0.92;

    document.documentElement.classList.remove("reveal-ready");

    sections.forEach((section) => {
      section.classList.add("reveal-section");
      section.classList.remove("is-revealed");

      if (reduceMotion || section.getBoundingClientRect().top <= initialRevealLine) {
        section.classList.add("is-revealed");
      }
    });

    document.documentElement.classList.add("reveal-ready");

    if (reduceMotion) {
      return () => {
        document.documentElement.classList.remove("reveal-ready");
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const section = entry.target as HTMLElement;
          section.classList.add("is-revealed");
          observer.unobserve(section);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    sections.forEach((section) => {
      if (!section.classList.contains("is-revealed")) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, [pathname]);

  return null;
}
