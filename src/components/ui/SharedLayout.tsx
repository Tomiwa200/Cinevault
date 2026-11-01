import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export function MainLayout({
  children,
  className = "",
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <main
        className={[
          "mx-auto w-full max-w-[1440px]",
          "px-4 py-6 sm:px-6 lg:px-8",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </main>
    </div>
  );
}