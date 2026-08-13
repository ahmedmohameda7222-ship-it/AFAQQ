import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 max-w-full items-center gap-3 text-sm font-medium tracking-[-0.01em] ${className}`}
    >
      <span className="min-w-0">{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-4 w-4 shrink-0 transition-transform duration-[var(--motion-fast)] ease-[var(--ease-standard)] group-hover:translate-x-1 group-focus-visible:translate-x-1"
        fill="none"
      >
        <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
      </svg>
    </Link>
  );
}
