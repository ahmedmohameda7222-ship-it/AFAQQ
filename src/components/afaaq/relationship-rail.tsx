type RelationshipRailProps = {
  names: readonly string[];
};

export function RelationshipRail({ names }: RelationshipRailProps) {
  if (names.length === 0) return null;

  const desktopItems = [...names, ...names];

  return (
    <div className="border-y border-[var(--rule)] py-8 md:py-10">
      <p className="mb-7 mt-0 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        Selected Clients
      </p>

      <div className="relationship-rail__viewport overflow-x-auto md:overflow-hidden">
        <div className="flex w-max items-center whitespace-nowrap md:hidden" aria-label={names.join(", ")}>
          {names.map((name) => (
            <span key={name} className="flex snap-start items-center text-[1.65rem] font-medium tracking-[-0.035em]">
              {name}
              <span className="mx-7 text-[var(--rule)]">—</span>
            </span>
          ))}
        </div>

        <div className="relationship-marquee__track hidden w-max items-center whitespace-nowrap md:flex" aria-label={names.join(", ")}>
          {desktopItems.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="flex items-center text-[clamp(1.8rem,3.2vw,2.65rem)] font-medium tracking-[-0.04em]"
              aria-hidden={index >= names.length}
            >
              {name}
              <span className="mx-9 text-[var(--rule)] lg:mx-12">—</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
