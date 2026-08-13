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
      className={`group inline-flex min-h-[52px] items-center justify-between gap-8 rounded-[var(--radius-xs)] px-5 text-sm font-semibold transition-colors duration-[var(--motion-ui)] ${toneClasses}`}
    >
      <span>{children}</span>
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1" fill="none">
        <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </Link>
  );
}
