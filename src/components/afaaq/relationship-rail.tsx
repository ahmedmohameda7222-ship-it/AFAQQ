/* eslint-disable @next/next/no-img-element */

type RelationshipRailProps = {
  names: readonly string[];
};

const clientDomains: Record<string, string> = {
  "Schneider Electric": "se.com",
  "ELSEWEDY ELECTRIC": "elsewedyelectric.com",
  Madkour: "madkour.com.eg",
  "GE Vernova": "gevernova.com",
  "Siemens Energy": "siemens-energy.com",
  ABB: "abb.com",
  "Hitachi Energy": "hitachienergy.com",
  EGEMAC: "egemac.com.eg",
  EETC: "eetc.gov.eg",
  NECC: "eetc.gov.eg",
  "GAMA Construction": "gama.com.eg",
  "Orascom Construction": "orascom.com",
  Petrojet: "petrojet.com.eg",
  ENPPI: "enppi.com",
  "The Arab Contractors": "arabcont.com",
};

function ClientItem({ name }: { name: string }) {
  const domain = clientDomains[name];
  const logoUrl = domain
    ? `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(`https://${domain}`)}&sz=128`
    : null;

  return (
    <span className="flex items-center">
      {logoUrl ? (
        <span className="mr-3 inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[2px] bg-white md:mr-4 md:h-10 md:w-10">
          <img src={logoUrl} alt="" width="40" height="40" loading="lazy" className="h-7 w-7 object-contain md:h-8 md:w-8" />
        </span>
      ) : null}
      <span>{name}</span>
    </span>
  );
}

export function RelationshipRail({ names }: RelationshipRailProps) {
  if (names.length === 0) return null;

  const desktopItems = [...names, ...names];

  return (
    <div className="border-y border-[var(--rule)] py-8 md:py-10">
      <p className="font-technical mb-7 mt-0 text-[0.78rem] font-medium uppercase leading-5 tracking-[0.1em] text-[var(--muted)]">
        Project Relationships
      </p>

      <div className="relationship-rail__viewport overflow-x-auto md:overflow-hidden">
        <div className="flex w-max items-center whitespace-nowrap md:hidden" aria-label={names.join(", ")}>
          {names.map((name) => (
            <span key={name} className="flex snap-start items-center text-[1.55rem] font-medium tracking-[-0.03em]">
              <ClientItem name={name} />
              <span className="mx-7 text-[var(--rule)]">—</span>
            </span>
          ))}
        </div>

        <div className="relationship-marquee__track hidden w-max items-center whitespace-nowrap md:flex" aria-label={names.join(", ")}>
          {desktopItems.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="flex items-center text-[clamp(1.65rem,2.8vw,2.35rem)] font-medium tracking-[-0.035em]"
              aria-hidden={index >= names.length}
            >
              <ClientItem name={name} />
              <span className="mx-9 text-[var(--rule)] lg:mx-12">—</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
