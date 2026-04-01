import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "emergency";
  target?: "_blank" | "_self";
  rel?: string;
  ariaLabel?: string;
};

const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-[#34754C] text-white shadow-[0_12px_26px_rgba(52,117,76,0.35)] hover:-translate-y-0.5 hover:bg-[#2d6642] focus-visible:outline-[#34754C]",
  secondary:
    "bg-white/10 text-[#102216] ring-1 ring-inset ring-[#34754C]/35 backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/70 focus-visible:outline-[#34754C]",
  ghost:
    "bg-transparent text-[#102216] ring-1 ring-inset ring-[#102216]/20 hover:bg-[#102216]/7 focus-visible:outline-[#102216]",
  emergency:
    "bg-[#F9D619] text-[#102216] shadow-[0_14px_26px_rgba(249,214,25,0.35)] hover:-translate-y-0.5 hover:bg-[#ebcb17] focus-visible:outline-[#F9D619]",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  target,
  rel,
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
