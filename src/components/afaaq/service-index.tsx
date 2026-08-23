import Link from "next/link";
import { services } from "@/content/services";

const primarySlugs = ["testing-commissioning", "protection-control"] as const;

const detailLabels: Record<(typeof primarySlugs)[number], string> = {
  "testing-commissioning": "Review Testing Capabilities",
  "protection-control": "Review Protection Capabilities",
};

export function ServiceIndex() {
  const primaryServices = primarySlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service && service.status === "verified"));

  return (
    <div className="mt-10 sm:mt-12 md:mt-14">
      {primaryServices.map((service, index) => (
        <article
          key={service.slug}
          id={service.slug}
          className="group grid min-w-0 gap-5 border-t border-white/20 py-8 transition-colors duration-[var(--motion-ui)] hover:bg-white/[0.025] sm:gap-6 sm:py-9 md:grid-cols-12 md:gap-8 md:px-2 md:py-11 last:border-b"
        >
          <p className="font-technical m-0 text-[0.82rem] font-medium leading-5 tracking-[0.08em] text-white/64 md:col-span-1">
            {String(index + 1).padStart(2, "0")}
          </p>

          <div className="min-w-0 md:col-span-5">
            <h3 className="m-0 max-w-[18ch] text-[clamp(1.85rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.04em]">
              {service.title}
            </h3>
          </div>

          <div className="min-w-0 md:col-span-5 md:col-start-8">
            <p className="m-0 max-w-xl text-[1.02rem] leading-7 text-white/80 sm:text-[1.06rem] sm:leading-8">{service.summary}</p>
            <Link
              href={`/services/${service.slug}`}
              className="group/link mt-4 inline-flex min-h-12 max-w-full items-center gap-3 text-[0.96rem] font-medium sm:mt-5 sm:text-[0.98rem]"
            >
              <span className="min-w-0">{detailLabels[service.slug as (typeof primarySlugs)[number]]}</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 transition-transform duration-[var(--motion-fast)] group-hover/link:translate-x-1" fill="none">
                <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
