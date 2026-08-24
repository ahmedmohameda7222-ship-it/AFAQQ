import Link from "next/link";
import { services } from "@/content/services";

const primarySlugs = ["testing-commissioning", "protection-control"] as const;

const supportingDefinitions = [
  { slug: "electrical-installation", title: "Electrical Installation" },
  { slug: "power-quality", title: "Power Quality" },
  { slug: "operation-maintenance", title: "Operation & Maintenance" },
  { slug: "engineering-consultancy", title: "Engineering Support" },
] as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CapabilityGrid() {
  const primaryServices = primarySlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service && service.status === "verified"));

  const supportingServices = supportingDefinitions
    .map((definition) => {
      const service = services.find((item) => item.slug === definition.slug && item.status === "verified");
      return service ? { service, displayTitle: definition.title } : null;
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="mt-10 sm:mt-12 md:mt-14">
      <div className="grid overflow-hidden border border-[var(--rule)] lg:grid-cols-2">
        {primaryServices.map((service, index) => (
          <article
            key={service.slug}
            className={`min-w-0 bg-[var(--surface)] p-7 sm:p-9 lg:p-10 ${index === 1 ? "border-t border-[var(--rule)] lg:border-l lg:border-t-0" : ""}`}
          >
            <p className="m-0 text-[0.82rem] font-semibold uppercase tracking-[0.07em] text-[var(--brand-navy)]">
              Core Capability
            </p>
            <h3 className="font-display mb-0 mt-4 max-w-[14ch] text-[clamp(2rem,3.2vw,3rem)] font-semibold leading-[0.99] tracking-[-0.032em] text-[var(--ink)]">
              {service.title}
            </h3>
            <p className="mb-0 mt-5 max-w-xl text-[1.05rem] leading-8 text-[var(--muted)] sm:text-[1.1rem]">
              {service.summary}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="group mt-6 inline-flex min-h-12 items-center gap-3 text-[1rem] font-semibold text-[var(--brand-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4"
            >
              <span>Explore capability</span>
              <span className="transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1 group-focus-visible:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </article>
        ))}
      </div>

      <div className="supporting-capability-index mt-8 border-t border-[var(--rule)] sm:mt-10">
        {supportingServices.map(({ service, displayTitle }) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group grid min-h-12 gap-3 border-b border-[var(--rule)] py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4 sm:py-7 md:grid-cols-12 md:items-center md:gap-7"
          >
            <h3 className="font-display m-0 text-[1.42rem] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--ink)] transition-colors group-hover:text-[var(--brand-navy)] group-focus-visible:text-[var(--brand-navy)] sm:text-[1.55rem] md:col-span-4">
              {displayTitle}
            </h3>
            <p className="m-0 max-w-3xl text-[1.01rem] leading-7 text-[var(--muted)] sm:text-[1.05rem] md:col-span-7">
              {service.summary}
            </p>
            <span className="inline-flex items-center justify-self-start text-[var(--brand-navy)] transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1 group-focus-visible:translate-x-1 md:col-span-1 md:justify-self-end" aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
