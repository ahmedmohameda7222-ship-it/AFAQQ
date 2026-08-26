export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-technical m-0 text-[0.8rem] font-medium uppercase leading-5 tracking-[0.09em] text-current opacity-[0.72] sm:text-[0.82rem] md:text-[0.84rem]">
      {children}
    </p>
  );
}
