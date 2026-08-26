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
    <ol className="mt-9 grid list-none gap-0 p-0 sm:mt-11 md:mt-13 md:grid-cols-2 lg:grid-cols-3">
      {steps.map(([title, description], index) => (
        <li
          key={title}
          className="relative min-w-0 border-t-2 border-[var(--ink)] py-6 sm:py-7 md:min-h-[16rem] md:px-6 md:py-8 lg:px-8"
        >
          <div className="flex items-center gap-4">
            <span className="font-technical text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-none tracking-[-0.05em] text-[var(--ink)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-[var(--rule)]" aria-hidden="true" />
          </div>
          <h3 className="mb-0 mt-5 max-w-[19rem] text-[1.3rem] font-medium leading-[1.2] tracking-[-0.028em] sm:mt-6 sm:text-[1.38rem]">{title}</h3>
          <p className="mb-0 mt-3 max-w-[24rem] text-[0.99rem] leading-7 text-[var(--muted)] sm:text-[1.02rem]">{description}</p>
        </li>
      ))}
    </ol>
  );
}
