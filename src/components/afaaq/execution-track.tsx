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
    <ol className="mt-10 grid list-none gap-px border border-[var(--rule)] bg-[var(--rule)] p-0 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
      {steps.map(([title, description], index) => (
        <li key={title} className="min-w-0 bg-white p-7 sm:p-8 lg:min-h-[15rem] lg:p-9">
          <span className="font-technical text-[clamp(2.4rem,4vw,3.5rem)] font-semibold leading-none tracking-[-0.05em] text-[var(--brand-navy)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display mb-0 mt-6 max-w-[18rem] text-[1.38rem] font-semibold leading-[1.14] tracking-[-0.022em] text-[var(--ink)] sm:text-[1.48rem]">
            {title}
          </h3>
          <p className="mb-0 mt-4 max-w-[25rem] text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.04rem]">
            {description}
          </p>
        </li>
      ))}
    </ol>
  );
}
