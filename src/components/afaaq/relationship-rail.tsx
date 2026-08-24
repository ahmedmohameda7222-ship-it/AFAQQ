"use client";

import Image from "next/image";
import { useState } from "react";

type RelationshipRailProps = {
  names: readonly string[];
  motion?: "marquee" | "static";
};

type ClientVisual = {
  localSrc?: string;
  domain?: string;
};

const clientVisuals: Record<string, ClientVisual> = {
  "Schneider Electric": {
    localSrc: "/brand/relationships/schneider-electric.svg",
    domain: "se.com",
  },
  "ELSEWEDY ELECTRIC": { domain: "elsewedyelectric.com" },
  Madkour: { domain: "madkour.com.eg" },
  "GE Vernova": { domain: "gevernova.com" },
  "Siemens Energy": { domain: "siemens-energy.com" },
  ABB: {
    localSrc: "/brand/relationships/abb.svg",
    domain: "abb.com",
  },
  "Hitachi Energy": { domain: "hitachienergy.com" },
  EGEMAC: { domain: "egemac.com.eg" },
  EETC: { domain: "eetc.gov.eg" },
  NECC: { domain: "eetc.gov.eg" },
  "Arab Organization for Industrialization": { domain: "aoi.org.eg" },
};

function fallbackMark(name: string) {
  return name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function ClientItem({ name }: { name: string }) {
  const visual = clientVisuals[name];
  const fallbackUrl = visual?.domain
    ? `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(`https://${visual.domain}`)}&sz=128`
    : null;
  const logoUrl = visual?.localSrc ?? fallbackUrl;

  return (
    <span className="flex min-w-0 items-center gap-4 sm:gap-5">
      <span
        className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[2px] border border-[var(--rule)] bg-white sm:h-12 sm:w-12"
        aria-hidden="true"
      >
        <span className="text-[0.62rem] font-semibold tracking-[-0.03em] text-[var(--brand-navy)]/68">
          {fallbackMark(name)}
        </span>
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt=""
            width={36}
            height={36}
            sizes="36px"
            loading="lazy"
            className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 bg-white object-contain sm:h-9 sm:w-9"
          />
        ) : null}
      </span>
      <span className="min-w-0 text-[1.16rem] font-semibold tracking-[-0.018em] text-[var(--ink)] sm:text-[1.28rem] md:text-[1.36rem]">
        {name}
      </span>
    </span>
  );
}

function RelationshipHeader() {
  return (
    <div className="max-w-4xl">
      <h2
        id="relationship-heading"
        className="font-display m-0 max-w-[20ch] text-[clamp(2.1rem,3.7vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.032em] text-[var(--ink)]"
      >
        Selected Project & Client Relationships
      </h2>
      <p className="mb-0 mt-5 max-w-2xl text-[1rem] leading-7 text-[var(--muted)] md:text-[1.05rem]">
        Organizations represented across AFAAQ&apos;s project and client relationships.
      </p>
    </div>
  );
}

export function RelationshipRail({ names, motion = "marquee" }: RelationshipRailProps) {
  const [paused, setPaused] = useState(false);

  if (names.length === 0) return null;

  if (motion === "static") {
    return (
      <section aria-labelledby="relationship-heading">
        <RelationshipHeader />
        <div className="mt-8 grid border-t border-[var(--rule)] sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {names.map((name) => (
            <div key={name} className="min-w-0 border-b border-[var(--rule)] py-6 sm:px-5 sm:py-7 sm:first:pl-0 lg:px-7 lg:first:pl-0">
              <ClientItem name={name} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  const items = [...names, ...names];

  return (
    <section aria-labelledby="relationship-heading">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
        <RelationshipHeader />
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
          className="inline-flex min-h-11 w-fit items-center border-b border-[var(--brand-navy)] px-0 text-[0.9rem] font-semibold text-[var(--brand-navy)]"
        >
          {paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>

      <div className="mt-8 border-y border-[var(--rule)] py-5 sm:mt-10 sm:py-6">
        <div
          className={`relationship-marquee__viewport overflow-hidden ${paused ? "relationship-marquee__paused" : ""}`}
          role="region"
          aria-label="Project and client relationships"
          tabIndex={0}
        >
          <div className="relationship-marquee__track flex w-max items-center" role="list">
            {items.map((name, index) => {
              const isDuplicate = index >= names.length;

              return (
                <span
                  key={`${name}-${index}`}
                  role="listitem"
                  aria-hidden={isDuplicate}
                  className={`relationship-marquee__item flex shrink-0 items-center ${isDuplicate ? "relationship-marquee__duplicate" : ""}`}
                >
                  <ClientItem name={name} />
                  <span
                    className="relationship-marquee__separator mx-7 h-8 w-px shrink-0 bg-[var(--rule)] sm:mx-9 md:mx-11 lg:mx-12"
                    aria-hidden="true"
                  />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
