import { Heart } from "lucide-react";
import { IconButton } from "./IconButton";
import { Badge } from "./Badge";



interface MediaCardProps {
    title: string;
    releaseYear: number;
    rating: number;
    posterUrl: string;
    badge?: string;
    isFavourite: boolean;
    onToggleFavourite: () => void;
}



export function MediaCard({
    title,
    releaseYear,
    rating,
    posterUrl,
    badge,
    isFavourite,
    onToggleFavourite
}: MediaCardProps) {
    return (
        <article className="relative rounded-xl border border-border w-64 h-96 overflow-hidden">
             <img src={posterUrl} alt={`${title} poster`} className="aspect-[2/3] rounded-lg object-cover block w-full"/>
            <div className="absolute w-full h-full inset-0 bg-transparent hover:bg-text-secondary/20 transition-colors duration-150">
             <div className="absolute bottom-5 left-5">
              <h2 className="text-xl font-bold text-text-primary">{title}</h2>
              <p className="mt-2 text-lg font-medium text-text-primary">{releaseYear}</p>
              <p className="mt-1 text-lg font-medium text-warning">
                {rating.toFixed(1)}
              </p>
             </div>
            <div className="absolute top-2 right-2">
                 <IconButton
                icon={<Heart />}
                label="Add to favourites"
            />
            </div>
            {badge && 
            <Badge className="absolute top-2 left-2">{badge}</Badge>}
            </div>
        </article>
    )
}