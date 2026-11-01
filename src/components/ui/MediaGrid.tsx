import type { ReactNode } from "react";

interface MediaGridProps {
    children: ReactNode;
    className: string;
}

export function MediaGrid({
    children,
    className=""
}: MediaGridProps){
    return(
        <div className={`${className}`}>
         {children}
        </div>
    )
}