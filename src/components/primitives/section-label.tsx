export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
      {children}
    </p>
  );
}
