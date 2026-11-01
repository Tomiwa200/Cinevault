import { MediaCardSkeleton } from "./MediaCardSkeleton";

interface MediaGridSkeletonProps {
  count?: number;
  className?: string;
}

export function MediaGridSkeleton({
  count = 10,
  className = "",
}: MediaGridSkeletonProps) {
  const safeCount = Math.max(
    0,
    Math.min(30, Math.floor(count)),
  );

  return (
    <div
      role="status"
      aria-label="Loading movies and TV shows"
      className={[
        "grid grid-cols-2 gap-4",
        "sm:grid-cols-3 sm:gap-5",
        "lg:grid-cols-4",
        "xl:grid-cols-5",
        "2xl:grid-cols-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {Array.from({ length: safeCount }, (_, index) => (
        <MediaCardSkeleton key={index} />
      ))}

      <span className="sr-only">
        Loading movies and TV shows…
      </span>
    </div>
  );
}