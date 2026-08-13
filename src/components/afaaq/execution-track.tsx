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
    <ol className="mt-10 grid list-none gap-0 p-0 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
      {steps.map(([title, description], index) => (
        <li
          key={title}
          className="relative border-t border-[var(--rule)] py-6 md:min-h-48 md:px-6 md:py-7 lg:px-8"
        >
          <p className="font-technical m-0 text-[0.78rem] font-medium leading-5 tracking-[0.08em] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mb-0 mt-5 max-w-[19rem] text-[1.3rem] font-medium leading-7 tracking-[-0.025em]">{title}</h3>
          <p className="mb-0 mt-3 max-w-[24rem] text-[1rem] leading-7 text-[var(--muted)]">{description}</p>
        </li>
      ))}
    </ol>
  );
}
