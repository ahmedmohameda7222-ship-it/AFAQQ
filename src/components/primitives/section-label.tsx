export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 text-[0.76rem] font-semibold uppercase tracking-[0.13em] text-[var(--muted)]">
      {children}
    </p>
  );
}
