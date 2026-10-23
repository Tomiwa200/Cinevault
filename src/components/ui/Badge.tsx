import type {
  HTMLAttributes,
} from "react";

type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning";

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const badgeStyles: Record<BadgeVariant, string> = {
  default:
    "border border-zinc-700 bg-zinc-800 text-zinc-300",

  primary:
    "bg-violet-500/15 text-violet-300",

  success:
    "bg-green-500/15 text-green-300",

  warning:
    "bg-amber-500/15 text-amber-300",
};

export function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1",
        "text-xs font-medium",
        badgeStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}