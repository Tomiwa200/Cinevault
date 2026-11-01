import type { ReactNode } from "react";



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
    className={`bg-brand text-white hover:bg-brand-600 rounded-lg px-4 py-[6px] font-medium transition-colors ${className}`}
    >
      {children}
    </span>
  )
}