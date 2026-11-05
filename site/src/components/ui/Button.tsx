import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "orange" | "charcoal" | "outline";

export function ButtonLink({
  href,
  variant,
  children,
  arrow,
  className = "",
  title,
}: {
  href: string;
  variant: Variant;
  children: ReactNode;
  arrow?: boolean;
  className?: string;
  title?: string;
}) {
  return (
    <Link href={href} className={`btn btn--${variant} ${className}`} title={title}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function Arrow() {
  return (
    <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
