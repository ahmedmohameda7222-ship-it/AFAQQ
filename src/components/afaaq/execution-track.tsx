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
    <ol className="execution-process__rail relative mt-10 list-none border-y border-[var(--rule)] p-0 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[3px] before:bg-[var(--brand-blue)] sm:mt-12">
      {steps.map(([title, description], index) => (
        <li
          key={title}
          className="grid min-w-0 gap-4 border-b border-[var(--rule)] py-6 pl-6 last:border-b-0 sm:grid-cols-[4.75rem_minmax(0,1fr)] sm:gap-6 sm:py-7 sm:pl-8 md:grid-cols-12 md:items-start md:gap-8 md:py-8"
        >
          <span className="font-technical text-[1.55rem] font-semibold leading-none tracking-[-0.035em] text-[var(--brand-navy)] sm:text-[1.7rem] md:col-span-2 md:pt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 sm:col-start-2 md:col-span-4 md:col-start-3">
            <h3 className="font-display m-0 max-w-[20rem] text-[1.42rem] font-semibold leading-[1.12] tracking-[-0.022em] text-[var(--ink)] sm:text-[1.55rem] md:text-[1.65rem]">
              {title}
            </h3>
          </div>
          <p className="m-0 max-w-[34rem] text-[1.02rem] leading-7 text-[var(--muted)] sm:col-start-2 sm:text-[1.06rem] md:col-span-6 md:col-start-7 md:leading-8">
            {description}
          </p>
        </li>
      ))}
    </ol>
  );
}
