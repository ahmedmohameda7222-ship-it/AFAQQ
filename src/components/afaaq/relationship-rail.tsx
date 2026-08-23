type RelationshipRailProps = {
  names: readonly string[];
};

export function RelationshipRail({ names }: RelationshipRailProps) {
  if (names.length === 0) return null;

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

      <ul className="mt-8 grid list-none border-y border-[var(--rule)] p-0 sm:grid-cols-2 lg:grid-cols-3">
        {names.map((name, index) => (
          <li
            key={name}
            className={`min-w-0 py-6 text-[1.08rem] font-semibold leading-7 text-[var(--ink)] sm:min-h-[6.5rem] sm:px-6 sm:py-7 sm:text-[1.14rem] lg:min-h-[7rem] lg:px-7 lg:text-[1.2rem] ${index > 0 ? "border-t border-[var(--rule)] sm:border-t-0" : ""} ${index % 2 === 1 ? "sm:border-l sm:border-[var(--rule)]" : ""} ${index >= 2 ? "sm:border-t" : ""} ${index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"} ${index >= 3 ? "lg:border-t" : "lg:border-t-0"}`}
          >
            <span className="block max-w-[24rem] break-words">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
