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
            <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[var(--brand-navy)]">
              Core Capability
            </p>
            <h3 className="font-display mb-0 mt-4 max-w-[14ch] text-[clamp(2.05rem,3.5vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-[var(--ink)]">
              {service.title}
            </h3>
            <p className="mb-0 mt-5 max-w-xl text-[1.04rem] leading-8 text-[var(--muted)] sm:text-[1.08rem]">
              {service.summary}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="group mt-6 inline-flex min-h-12 items-center gap-3 font-semibold text-[var(--brand-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4"
            >
              <span>Explore capability</span>
              <span className="transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1 group-focus-visible:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-5 grid border-y border-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
        {supportingServices.map(({ service, displayTitle }, index) => (
          <article
            key={service.slug}
            className={`min-w-0 py-6 sm:min-h-[12rem] sm:px-6 sm:py-7 lg:min-h-[13rem] lg:px-7 ${index > 0 ? "border-t border-[var(--rule)] sm:border-t-0" : ""} ${index % 2 === 1 ? "sm:border-l sm:border-[var(--rule)]" : ""} ${index > 1 ? "sm:border-t lg:border-t-0" : ""} ${index > 0 ? "lg:border-l lg:border-[var(--rule)]" : ""}`}
          >
            <h3 className="font-display m-0 max-w-[15ch] text-[1.45rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[var(--ink)] sm:text-[1.58rem]">
              {displayTitle}
            </h3>
            <p className="mb-0 mt-4 text-[0.98rem] leading-7 text-[var(--muted)]">
              {service.summary}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-5 inline-flex min-h-11 items-center font-semibold text-[0.94rem] text-[var(--brand-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4"
            >
              View service
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
