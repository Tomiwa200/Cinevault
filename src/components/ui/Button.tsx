import type { ReactNode } from "react";
import  { cn } from "../../utils/cn";


type ButtonVariant = "primary" | "secondary" | "danger" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand-500 text-white hover:bg-brand-600",
  secondary: "border border-border bg-surface text-text-primary hover:bg-surface-elevated",
  danger: "bg-danger text-white hover:opacity-90",
  outline: "border border-border bg-transparent text-text-primary hover:bg-surface-elevated",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn("rounded-lg px-4 py-2 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 disabled:cursor-not-allowed disabled:opacity-50",
         variantStyles[variant],
         className
      )}
    >
      {children}
    </button>
  );
}