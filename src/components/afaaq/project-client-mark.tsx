/* eslint-disable @next/next/no-img-element */

type ProjectClientMarkProps = {
  name: string;
  compact?: boolean;
};

const clientDomains: Record<string, string> = {
  "Schneider Electric": "se.com",
  "ELSEWEDY ELECTRIC": "elsewedyelectric.com",
  "ELSEWEDY ELECTRIC T&D": "elsewedyelectric.com",
  "EETC – Delta Area": "eetc.gov.eg",
  "EETC – Gharbia": "eetc.gov.eg",
  EETC: "eetc.gov.eg",
  Madkour: "madkour.com.eg",
};

function resolveClientDomain(name: string) {
  if (clientDomains[name]) return clientDomains[name];
  if (name.toLowerCase().includes("schneider")) return "se.com";
  if (name.toLowerCase().includes("elsewedy")) return "elsewedyelectric.com";
  if (name.toUpperCase().includes("EETC")) return "eetc.gov.eg";
  return null;
}

export function ProjectClientMark({ name, compact = false }: ProjectClientMarkProps) {
  const domain = resolveClientDomain(name);
  const logoUrl = domain
    ? `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(`https://${domain}`)}&sz=128`
    : null;

  return (
    <span className="inline-flex min-w-0 items-center gap-3">
      {logoUrl ? (
        <span
          className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[2px] border border-[var(--rule)] bg-white ${compact ? "h-8 w-8" : "h-10 w-10"}`}
          aria-hidden="true"
        >
          <img
            src={logoUrl}
            alt=""
            width={compact ? 24 : 30}
            height={compact ? 24 : 30}
            loading="lazy"
            className={compact ? "h-6 w-6 object-contain" : "h-[1.875rem] w-[1.875rem] object-contain"}
          />
        </span>
      ) : null}
      <span className={`${compact ? "text-[0.82rem]" : "text-[0.95rem]"} min-w-0 font-medium leading-5`}>{name}</span>
    </span>
  );
}
