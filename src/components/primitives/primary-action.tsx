import Link from "next/link";

type PrimaryActionProps = {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
};

export function PrimaryAction({ href, children, tone = "dark" }: PrimaryActionProps) {
  const toneClasses =
    tone === "light"
      ? "bg-[var(--canvas)] text-[var(--ink)] hover:bg-white"
      : "bg-[var(--ink)] text-[#f4f3ef] hover:bg-[var(--graphite)]";

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-14 w-full max-w-full items-center justify-between gap-7 rounded-[var(--radius-xs)] px-6 text-[0.95rem] font-semibold tracking-[-0.01em] transition-colors duration-[var(--motion-ui)] sm:w-auto sm:gap-9 sm:px-7 ${toneClasses}`}
    >
      <span className="min-w-0">{children}</span>
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-[1.05rem] w-[1.05rem] shrink-0 transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1" fill="none">
        <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </Link>
  );
}
