type RelationshipRailProps = {
  names: readonly string[];
};

export function RelationshipRail({ names }: RelationshipRailProps) {
  if (names.length === 0) return null;

  if (names.length < 3) {
    return (
      <div className="border-y border-[var(--rule)] py-9 md:py-11">
        <div className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3">
          <p className="m-0 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            Verified Project Relationship
          </p>
          <p className="m-0 text-[clamp(1.55rem,3vw,2.45rem)] font-medium tracking-[-0.035em]">
            {names[0]}
          </p>
        </div>
      </div>
    );
  }

  const items = [...names, ...names];

  return (
    <div className="relationship-marquee overflow-hidden border-y border-[var(--rule)] py-9 md:py-11">
      <p className="mb-7 mt-0 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
        Selected Project Relationships
      </p>
      <div className="relationship-marquee__track flex w-max items-center whitespace-nowrap" aria-label={names.join(", ")}>
        {items.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="flex items-center text-[clamp(1.65rem,3.5vw,2.75rem)] font-medium tracking-[-0.04em]"
            aria-hidden={index >= names.length}
          >
            {name}
            <span className="mx-7 text-[var(--rule)] md:mx-10">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
