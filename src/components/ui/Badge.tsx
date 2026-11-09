import type { ReactNode } from "react";
import { cn } from "../../utils/cn";



interface BadgeProps {
  children: ReactNode;
  className?: string;
}



export function Badge({
 children,
 className
}: BadgeProps) {
  return (
    <span
    className={cn("bg-warning text-white hover:bg-brand-600 rounded-lg px-2 py-1 font-medium transition-colors", className)}
    >
      {children}
    </span>
  )
}