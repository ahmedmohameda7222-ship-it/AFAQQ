export function Divider({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`h-px w-full bg-[var(--rule)] ${className}`} />;
}
