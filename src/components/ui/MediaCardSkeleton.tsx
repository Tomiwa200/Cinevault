import { Skeleton } from "../ui/Skeleton";

export function MediaCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="min-w-0"
    >
      <Skeleton className="aspect-[2/3] w-full rounded-xl" />

      <div className="space-y-2 pt-3">
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-3 w-2/5" />
      </div>
    </div>
  );
}