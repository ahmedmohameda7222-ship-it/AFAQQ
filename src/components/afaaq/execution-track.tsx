const steps = [
  ["Engineering Review", "Review the approved drawings, scope boundaries, interfaces and system requirements before site work begins."],
  ["Method & ITP Planning", "Prepare the work method, inspection and test sequence, procedures, resources and site requirements."],
  ["Installation & Wiring", "Install equipment, panels, cables and control wiring in line with the approved project documents."],
  ["Protection & Functional Testing", "Verify wiring, relay functions, interlocks, trip circuits and control logic against the approved scheme."],
  ["SCADA / RTU & Energization", "Check remote signals, control paths and system readiness, then support commissioning and safe energization."],
  ["Records & Handover", "Close final checks and compile test records, marked-up information and handover documentation."],
] as const;

export function ExecutionTrack() {
  return (
    <ol className="mt-10 grid list-none border-y border-[var(--ink)] p-0 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
      {steps.map(([title, description], index) => {
        const isLastColumn = index % 3 === 2;
        const isSecondRow = index >= 3;

        return (
          <li
            key={title}
            className={`relative min-w-0 border-b border-[var(--rule)] py-7 sm:py-8 md:px-6 lg:min-h-[15.5rem] lg:px-8 ${isLastColumn ? "lg:border-r-0" : "lg:border-r"} ${isSecondRow ? "lg:border-b-0" : ""}`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-technical text-[clamp(2.5rem,4vw,3.8rem)] font-medium leading-none tracking-[-0.055em] text-[var(--ink)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-technical text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                Step
              </span>
            </div>
            <h3 className="mb-0 mt-6 max-w-[19rem] text-[1.34rem] font-medium leading-[1.18] tracking-[-0.03em] sm:text-[1.42rem]">
              {title}
            </h3>
            <p className="mb-0 mt-3 max-w-[24rem] text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.04rem]">
              {description}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
