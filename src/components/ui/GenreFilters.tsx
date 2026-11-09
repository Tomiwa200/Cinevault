import type { Genre } from "../../types/media";


interface GenreFiltersProps {
  genres: Genre[];
  selectedGenre: number | null;
  onGenreChange: (genreId: number | null) => void;
}

export default function GenreFilters({
  genres,
  selectedGenre,
  onGenreChange,
}: GenreFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => onGenreChange(null)}
        className={
          selectedGenre === null
            ? "rounded-full bg-brand px-4 py-2 text-white"
            : "rounded-full bg-surface px-4 py-2 text-text-secondary"
        }
      >
        All
      </button>

      {genres.map((genre) => (
        <button
          key={genre.id}
          type="button"
          onClick={() => onGenreChange(genre.id)}
          className={
            selectedGenre === genre.id
              ? "rounded-full bg-brand px-4 py-2 text-white"
              : "rounded-full bg-surface px-4 py-2 text-text-secondary"
          }
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}