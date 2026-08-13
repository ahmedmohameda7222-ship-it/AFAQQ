export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-technical m-0 text-[0.78rem] font-medium uppercase leading-5 tracking-[0.1em] text-current opacity-[0.64]">
      {children}
    </p>
  );
}
