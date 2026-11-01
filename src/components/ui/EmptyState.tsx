
import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

 export function EmptyState({
  title,
  description,
  className = "",
  children
}: EmptyStateProps) {
  return (
    <div
      className={`
        "flex flex-col items-center justify-center
        rounded-xl border border-border
        bg-surface px-6 py-12 text-center"
        ${className}`}
    >

      <h3 className="text-lg font-semibold text-text-primary">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-text-secondary">
        {description}
      </p>
      {children}
    </div>
  );
} 