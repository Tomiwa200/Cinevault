import { Heart } from "lucide-react";
import { IconButton } from "./IconButton";
import { Badge } from "./Badge";



interface MediaCardProps {
    title: string;
    releaseYear: number;
    rating: number;
    posterUrl: string;
    genres?: string[];
    isFavourite: boolean;
    onToggleFavourite: () => void;
}



export function MediaCard({
    title,
    releaseYear,
    rating,
    posterUrl,
    genres = [],
    isFavourite,
    onToggleFavourite
}: MediaCardProps) {
    return (
        <article className="relative rounded-xl border border-border overflow-hidden">
            <img src={posterUrl} alt={`${title} poster`} className="aspect-[2/3] rounded-lg object-cover block w-full" />
            <div className="absolute w-full h-full inset-0 bg-transparent hover:bg-text-secondary/20 transition-colors duration-150">
                <div className="absolute bottom-5 left-5">
                    <h2 className="text-xl font-bold text-text-primary">{title}</h2>
                    <p className="mt-2 text-lg font-medium text-text-primary">{releaseYear}</p>
                    <p className="mt-1 text-lg font-medium text-warning">
                        {rating.toFixed(1)}
                    </p>
                </div>
                <div className="absolute top-2 right-3">
                    <IconButton
                        icon={<Heart />}
                        label="Add to favourites"
                    />
                </div>
                <div className="flex flex-col w-[50%] gap-2 mt-2 ml-2">
                    {genres.slice(0, 2).map((genre) => (
                        <Badge key={genre} className=" text-center">{genre}</Badge>
                    ))}
                </div>
            </div>
        </article>
    )
}