import { Link, type LinkProps } from "react-router";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary"  | "outline";

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-elevated",
  secondary:
    "border border-border bg-surface text-text-primary hover:bg-surface-elevated",
  outline:
    "border border-border bg-transparent text-text-primary hover:bg-surface-elevated",
};

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={cn("inline-flex items-center justify-center rounded-lg px-4 py-1 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
       variantStyles[variant],
       className
      )}
    >
      {children}
    </Link>
  );
}