const steps = [
  ["Engineering Review", "Confirm the project scope, drawings and system interfaces."],
  ["Planning", "Prepare the work plan, procedures and site requirements."],
  ["Installation", "Install and connect the approved electrical systems."],
  ["Testing", "Test equipment, wiring, protection and control functions."],
  ["Commissioning", "Check system readiness and support safe energization."],
  ["Handover", "Complete the final checks, records and handover."],
] as const;

export function ExecutionTrack() {
  return (
    <ol className="mt-12 grid list-none gap-0 p-0 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
      {steps.map(([title, description], index) => (
        <li
          key={title}
          className="relative border-t border-[var(--rule)] py-7 md:min-h-48 md:px-6 md:py-8 lg:px-8"
        >
          <p className="m-0 text-xs font-semibold tracking-[0.1em] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mb-0 mt-7 max-w-[16rem] text-[1.35rem] font-medium leading-7 tracking-[-0.03em]">{title}</h3>
          <p className="mb-0 mt-4 max-w-[22rem] text-[0.96rem] leading-7 text-[var(--muted)]">{description}</p>
        </li>
      ))}
    </ol>
  );
}
