import Link from "next/link";

export function PrimaryAction({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-[52px] items-center justify-between gap-8 rounded-[var(--radius-xs)] bg-[var(--ink)] px-5 text-sm font-medium text-[var(--canvas)] transition-colors duration-[var(--motion-ui)] hover:bg-[var(--graphite)]"
    >
      <span>{children}</span>
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition-transform duration-[var(--motion-fast)] group-hover:translate-x-1" fill="none">
        <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </Link>
  );
}
