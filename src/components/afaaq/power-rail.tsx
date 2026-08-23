import { Container } from "@/components/layout/container";

type PowerRailProps = {
  voltages: readonly {
    value: string;
    unit: string;
  }[];
  scaleValue: string;
  scaleLabel: string;
};

export function PowerRail({ voltages, scaleValue, scaleLabel }: PowerRailProps) {
  return (
    <section
      className="relative overflow-hidden bg-[var(--brand-deep-navy)] text-white"
      aria-label="AFAAQ power-system experience"
    >
      <div className="h-1 w-full bg-[var(--brand-blue)]" aria-hidden="true" />
      <Container>
        <div className="grid md:grid-cols-[minmax(0,1fr)_auto] md:items-stretch">
          <dl className="grid grid-cols-3">
            {voltages.map(({ value, unit }, index) => (
              <div
                key={`${value}-${unit}`}
                className={`min-w-0 py-5 pr-3 sm:py-6 sm:pr-5 md:py-7 md:pr-7 ${index > 0 ? "border-l border-white/16 pl-3 sm:pl-5 md:pl-7" : ""}`}
              >
                <dt className="sr-only">Voltage experience</dt>
                <dd className="m-0 flex min-w-0 items-baseline gap-1.5 sm:gap-2">
                  <span className="font-technical text-[clamp(1.9rem,4.2vw,3.35rem)] font-semibold leading-none tracking-[-0.045em]">
                    {value}
                  </span>
                  <span className="font-technical text-[0.72rem] font-medium uppercase tracking-[0.04em] text-white/74 sm:text-[0.8rem]">
                    {unit}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="border-t border-white/16 py-5 sm:py-6 md:flex md:min-w-[22rem] md:items-center md:border-l md:border-t-0 md:px-8 md:py-7 lg:min-w-[25rem] lg:px-10">
            <div className="flex items-baseline gap-3 sm:gap-4">
              <strong className="font-display text-[clamp(2rem,3.3vw,3rem)] font-semibold leading-none tracking-[-0.035em]">
                {scaleValue}
              </strong>
              <span className="max-w-[12rem] text-[0.98rem] font-medium leading-6 text-white/82 sm:text-[1.02rem]">
                {scaleLabel}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
