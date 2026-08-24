import Image from "next/image";

type RelationshipRailProps = {
  names: readonly string[];
};

type ClientVisual = {
  domain?: string;
};

const clientVisuals: Record<string, ClientVisual> = {
  "Schneider Electric": { domain: "se.com" },
  "ELSEWEDY ELECTRIC": { domain: "elsewedyelectric.com" },
  Madkour: { domain: "madkour.com.eg" },
  "GE Vernova": { domain: "gevernova.com" },
  "Siemens Energy": { domain: "siemens-energy.com" },
  ABB: { domain: "abb.com" },
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
  const logoUrl = visual?.domain
    ? `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(`https://${visual.domain}`)}&sz=128`
    : null;

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

export function RelationshipRail({ names }: RelationshipRailProps) {
  if (names.length === 0) return null;

  const items = [...names, ...names];

  return (
    <section aria-labelledby="relationship-heading">
      <div className="grid gap-5 md:grid-cols-12 md:items-end md:gap-8">
        <div className="min-w-0 md:col-span-8">
          <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[var(--brand-navy)]">
            Relationships
          </p>
          <h2
            id="relationship-heading"
            className="font-display mb-0 mt-4 max-w-[20ch] text-[clamp(2.1rem,3.7vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.032em] text-[var(--ink)]"
          >
            Selected Project & Client Relationships
          </h2>
        </div>
        <p className="m-0 max-w-lg text-[1rem] leading-7 text-[var(--muted)] md:col-span-4 md:justify-self-end md:text-[1.05rem]">
          Selected organizations represented in AFAAQ&apos;s project and client relationships.
        </p>
      </div>

      <div className="mt-8 border-y border-[var(--rule)] py-5 sm:mt-10 sm:py-6">
        <div
          className="relationship-marquee__viewport overflow-hidden"
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
                  aria-hidden={index >= names.length}
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
