export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 text-[0.76rem] font-semibold uppercase leading-5 tracking-[0.08em] text-current opacity-[0.74] sm:text-[0.78rem] md:text-[0.8rem]">
      {children}
    </p>
  );
}
