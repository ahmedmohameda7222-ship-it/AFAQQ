const steps = [
  ["Engineering Review", "Confirm project requirements, interfaces and execution scope."],
  ["Planning & Preparation", "Prepare procedures, resources and site requirements for execution."],
  ["Installation & Integration", "Execute approved electrical installation and system interfaces."],
  ["Testing & Verification", "Verify equipment, wiring, protection, control and functional performance."],
  ["Commissioning & Energization", "Support system readiness, commissioning and safe energization."],
  ["Handover & Support", "Complete documentation and project handover requirements."],
] as const;

export function ExecutionTrack() {
  return (
    <ol className="mt-12 grid list-none gap-0 p-0 md:mt-16 md:grid-cols-3 lg:grid-cols-6">
      {steps.map(([title, description], index) => (
        <li key={title} className="relative border-t border-[var(--rule)] py-6 md:min-h-52 md:border-r md:px-5 md:py-7 first:md:pl-0 last:md:border-r-0 last:md:pr-0">
          <p className="m-0 text-xs font-medium tracking-[0.08em] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mb-0 mt-6 max-w-[12rem] text-lg font-medium leading-6 tracking-[-0.025em]">{title}</h3>
          <p className="mb-0 mt-4 max-w-[15rem] text-sm leading-6 text-[var(--muted)]">{description}</p>
        </li>
      ))}
    </ol>
  );
}
