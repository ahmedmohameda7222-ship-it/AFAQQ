export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-technical m-0 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
      {children}
    </p>
  );
}
