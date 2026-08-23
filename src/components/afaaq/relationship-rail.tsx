import Image from "next/image";

type RelationshipRailProps = {
  names: readonly string[];
};

type ClientVisual = {
  domain?: string;
  logoUrl?: string;
  wide?: boolean;
};

const clientVisuals: Record<string, ClientVisual> = {
  "Schneider Electric": { domain: "se.com" },
  "ELSEWED ELECTRIC": { domain: "elsewedyelectric.com" },
  "ELSEWEDY ELECTRIC": { domain: "elsewedyelectric.com" },
  Madkour: { domain: "madkour.com.eg" },
  "GE Vernova": { domain: "gevernova.com" },
  "Siemens Energy": { domain: "siemens-energy.com" },
  ABB: { domain: "abb.com" },
  "Hitachi Energy": { domain: "hitachienergy.com" },
  EETC: { domain: "eetc.gov.eg" },
  NECC: { domain: "eetc.gov.eg" },
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
  const logoUrl = visual?.logoUrl ?? (visual?.domain
    ? `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(`https://${visual.domain}`)}&sz=128`
    : null);
  const width = visual?.wide ? 72 : 48;
  const height = 48;

  return (
    <span className="flex min-w-0 items-center">
      <span
        className={`relative mr-3.5 inline-flex h-11 shrink-0 items-center justify-center overflow-hidden rounded-[2px] border border-[var(--rule)]/75 bg-white md:mr-4 md:h-12 ${visual?.wide ? "w-16 md:w-[72px]" : "w-11 md:w-12"}`}
        aria-hidden="true"
      >
        <span className="font-technical text-[0.6rem] font-semibold tracking-[-0.04em] text-[var(--brand-navy)]/60">{fallbackMark(name)}</span>
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt=""
            width={width}
            height={height}
            sizes={`${width}px`}
            loading="lazy"
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white object-contain ${visual?.wide ? "h-9 w-14 md:h-10 md:w-16" : "h-8 w-8 md:h-9 md:w-9"}`}
          />
        ) : null}
      </span>
      <span className="min-w-0">{name}</span>
    </span>
  );
}

export function RelationshipRail({ names }: RelationshipRailProps) {
  if (names.length === 0) return null;

  const items = [...names, ...names];

  return (
    <div className="border-y border-[var(--rule)] py-8 sm:py-9 md:py-11">
      <div className="mb-7 flex items-end justify-between gap-5 sm:mb-8">
        <p className="font-technical m-0 text-[0.8rem] font-medium uppercase leading-5 tracking-[0.09em] text-[var(--muted)] sm:text-[0.82rem]">
          Project Relationships
        </p>
        <span className="hidden h-px max-w-[18rem] flex-1 bg-[var(--rule)] sm:block" aria-hidden="true" />
      </div>

      <div
        className="relationship-rail__viewport overflow-hidden"
        role="region"
        aria-label="Project relationships"
      >
        <div className="relationship-marquee__track flex w-max items-center whitespace-nowrap" aria-label={names.join(", ")}>
          {items.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="flex items-center text-[1.38rem] font-medium tracking-[-0.025em] sm:text-[1.62rem] sm:tracking-[-0.03em] md:text-[clamp(1.75rem,2.6vw,2.25rem)] md:tracking-[-0.035em]"
              aria-hidden={index >= names.length}
            >
              <ClientItem name={name} />
              <span className="mx-6 h-7 w-px bg-[var(--rule)] sm:mx-8 md:mx-10 lg:mx-12" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
