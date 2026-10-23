import type {
  ButtonHTMLAttributes,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
  
type ButtonSize = "sm" | "md" | "lg";
 
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles = [
  "inline-flex",
  "items-center",
  "justify-center",
  "gap-2",
  "rounded-lg",
  "font-medium",
  "transition-colors",
  "focus-visible:outline-2",
  "focus-visible:outline-offset-2",
  "focus-visible:outline-violet-400",
  "disabled:pointer-events-none",
  "disabled:opacity-50",
].join(" ");

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-500",

  secondary:
    "border border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700",

  ghost:
    "bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white",

  danger:
    "bg-red-600 text-white hover:bg-red-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-8 px-3 text-sm",
  md: "min-h-10 px-4 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      {...props}
    />
  );
}