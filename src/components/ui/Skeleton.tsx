
import type { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({
  className = "",
  ...props
}: SkeletonProps) {
  return (
    <div 
    aria-hidden="true"
    {...props}
    className={`animate-pulse rounded-md bg-surface-elevated ${className}`}>
    </div>
  );
}