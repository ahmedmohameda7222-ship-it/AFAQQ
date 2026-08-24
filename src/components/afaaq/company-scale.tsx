import { companyFacts } from "@/content/company";

const primaryLabels = new Set([
  "Substations delivered",
  "of EETC control centers project experience",
]);

export function CompanyScale() {
  const primaryFacts = companyFacts.filter(([, label]) => primaryLabels.has(label));

  if (primaryFacts.length === 0) return null;

  return (
    <div className="grid overflow-hidden border border-[var(--rule)] bg-[var(--surface)] md:grid-cols-2">
      {primaryFacts.map(([value, label], index) => (
        <article
          key={label}
          className={`min-w-0 p-7 sm:p-9 lg:p-10 ${index > 0 ? "border-t border-[var(--rule)] md:border-l md:border-t-0" : ""}`}
        >
          <p className="font-display m-0 text-[clamp(3.5rem,8vw,7.2rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-[var(--brand-navy)]">
            {value}
          </p>
          <p className="mb-0 mt-5 max-w-[24rem] text-[1.08rem] font-semibold leading-7 text-[var(--ink)] sm:text-[1.16rem] sm:leading-8">
            {label}
          </p>
        </article>
      ))}
    </div>
  );
}
