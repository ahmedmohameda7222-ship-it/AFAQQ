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
  EGEMAC: { domain: "egemac.com.eg" },
  EETC: { domain: "eetc.gov.eg" },
  NECC: { domain: "eetc.gov.eg" },
  "Red Sea Development Company": {
    logoUrl: "https://smartwatermagazine.com/sites/default/files/red_sea_logo.png",
    wide: true,
  },
  "GAMA Construction": { domain: "gama.com.eg" },
  "Orascom Construction": { domain: "orascom.com" },
  Petrojet: { domain: "petrojet.com.eg" },
  ENPPI: { domain: "enppi.com" },
  "The Arab Contractors": { domain: "arabcont.com" },
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
  const width = visual?.wide ? 64 : 40;
  const height = 40;

  return (
    <span className="flex min-w-0 items-center">
      {logoUrl ? (
        <span
          className={`relative mr-3 inline-flex h-9 shrink-0 items-center justify-center overflow-hidden rounded-[2px] bg-white md:mr-4 md:h-10 ${visual?.wide ? "w-14 md:w-16" : "w-9 md:w-10"}`}
          aria-hidden="true"
        >
          <span className="font-technical text-[0.55rem] font-semibold tracking-[-0.04em] text-[var(--brand-navy)]/55">{fallbackMark(name)}</span>
          <Image
            src={logoUrl}
            alt=""
            width={width}
            height={height}
            sizes={`${width}px`}
            loading="lazy"
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white object-contain ${visual?.wide ? "h-8 w-12 md:h-9 md:w-14" : "h-7 w-7 md:h-8 md:w-8"}`}
          />
        </span>
      ) : null}
      <span className="min-w-0">{name}</span>
    </span>
  );
}

export function RelationshipRail({ names }: RelationshipRailProps) {
  if (names.length === 0) return null;

  const items = [...names, ...names];

  return (
    <div className="border-y border-[var(--rule)] py-7 sm:py-8 md:py-10">
      <p className="font-technical mb-6 mt-0 text-[0.75rem] font-medium uppercase leading-5 tracking-[0.09em] text-[var(--muted)] sm:mb-7 sm:text-[0.78rem] sm:tracking-[0.1em]">
        Project Relationships
      </p>

      <div
        className="relationship-rail__viewport overflow-hidden"
        role="region"
        aria-label="Project relationships"
      >
        <div className="relationship-marquee__track flex w-max items-center whitespace-nowrap" aria-label={names.join(", ")}>
          {items.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="flex items-center text-[1.3rem] font-medium tracking-[-0.025em] sm:text-[1.55rem] sm:tracking-[-0.03em] md:text-[clamp(1.65rem,2.8vw,2.35rem)] md:tracking-[-0.035em]"
              aria-hidden={index >= names.length}
            >
              <ClientItem name={name} />
              <span className="mx-5 text-[var(--rule)] sm:mx-7 md:mx-9 lg:mx-12">—</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
