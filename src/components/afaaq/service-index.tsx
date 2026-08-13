import Link from "next/link";
import { services } from "@/content/services";

const primarySlugs = ["testing-commissioning", "protection-control", "scada-automation"] as const;

const detailLabels: Record<(typeof primarySlugs)[number], string> = {
  "testing-commissioning": "Review Testing Capabilities",
  "protection-control": "Review Protection Capabilities",
  "scada-automation": "Review SCADA Capabilities",
};

export function ServiceIndex() {
  const primaryServices = primarySlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service && service.status === "verified"));

  return (
    <div className="mt-12 md:mt-14">
      {primaryServices.map((service, index) => (
        <article key={service.slug} id={service.slug} className="grid gap-5 border-t border-white/18 py-7 md:grid-cols-12 md:gap-8 md:py-9">
          <p className="font-technical m-0 text-[0.7rem] text-white/45 md:col-span-1">{String(index + 1).padStart(2, "0")}</p>
          <div className="md:col-span-6">
            <h3 className="m-0 text-[clamp(1.8rem,3.2vw,3rem)] font-medium leading-[1.03] tracking-[-0.04em]">
              {service.title}
            </h3>
          </div>
          <div className="md:col-span-5">
            <p className="m-0 max-w-lg text-[0.98rem] leading-7 text-white/62">{service.summary}</p>
            <Link
              href={`/services#${service.slug}`}
              className="group mt-4 inline-flex min-h-12 items-center gap-3 text-sm font-medium"
            >
              <span>{detailLabels[service.slug as (typeof primarySlugs)[number]]}</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1" fill="none">
                <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
