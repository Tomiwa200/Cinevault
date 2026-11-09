import { useEffect, useMemo, useState } from "react";
import { MediaCard } from "../components/ui/MediaCard";
import { ButtonLink } from "../components/ui/ButtonLink";
import type { Genre, Media, MediaType } from "../types/media";
import type { ListsContextProps } from "../context/ListsContext";
import { getGenreNames, getMovieGenres, getMoviesByGenre, getPopularMovies } from "../services/tdmb/client";
import { getPosterUrl } from "../utils/ImageURL";
import GenreFilters from "../components/ui/GenreFilters";
import { ErrorMessage } from "../components/ui/ErrorMessage";
import { Button } from "../components/ui/Button";
import { Search } from "lucide-react";
import { useLists } from "../context/ListsContext";

export function HomePage() {
 
  const [genres, setGenres] = useState<Genre[]>([]);
  const [type, setType] = useState<"movie" | "tv">("movie");
  const [media, setMedia] = useState<Media[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [featuredLoading, setFeaturedLoading] = useState(false);
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [moviesError, setMoviesError] = useState<string | null>(null);
  const [genresError, setGenresError] = useState<string | null>(null);
  const [featuredError, setFeaturedError] = useState<string | null>(null);

  
  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await getMovieGenres();
        setGenres(response.genres);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setGenresError(error.message);
        }
      }
    }
 
    void fetchGenres();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setMoviesError(null);

        if (page === 1) {
          setIsLoading(true);
        } else {
          setIsLoadingMore(true);
        }

        const response =
          selectedGenre === null
            ? await getPopularMovies(type, page, controller.signal)
            : await getMoviesByGenre(
              type,
              selectedGenre,
              page,
              controller.signal
            );

        setTotalPages(response.total_pages);

        if (page === 1) {
          setMedia(response.results);

        } else {
          setMedia((currentMovies) => [
            ...currentMovies,
            ...response.results,
          ]);

        }
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setMoviesError(error.message);
        }
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    }

    void fetchMovies();

    return () => {
      controller.abort();
    };
  }, [type, selectedGenre, page]);

const heroMovie = useMemo(() => {
  if (!media.length) return null;

  const randomIndex = Math.floor(Math.random() * media.length);

  return media[randomIndex];
}, [media]);
const heroImage = heroMovie?.poster_path
  ? getPosterUrl(heroMovie.poster_path, "original")
  : null;


  
  return (
    <main>
      {featuredLoading && (
        <div className="min-h-[580px] md:min-h-[680px] text-center">
          <h3 className="text-3xl">Loading featured movie...</h3>
        </div>
      )}

      {heroMovie && (
        <section className="relative min-h-[580px] md:min-h-[680px] " >
         
          <img
            src={heroImage?? "images/Interstellar.jpeg"}
            alt={heroMovie.title?? heroMovie.name?? "Featured media poster"}
            className="absolute inset-0 h-full w-full object-cover"
          /> 

           <div className="absolute top-2 left-5 w-[30%] bg-gray-400/40 flex items-center gap-2 px-4 py-2 rounded-full text-white">
           <button>
            <Search size={30} className="font-bolder"/>
           </button>
          <input type="text" name="search" placeholder="Search..." 
          className=" placeholder:text-white outline-none "
          />
          </div>
          <div className="absolute left-[50%] mt-2 -translate-x-[50%] ">
            <Button className={`font-bold border-none mr-2 ${type === "movie" ? "bg-white text-surface": " " }`} variant="secondary"
            onClick={() => setType("movie")}
            >MOVIES</Button>
            <Button className={`font-bold border-none mr-2 ${type === "tv" ? "bg-white text-surface": ""}`} variant="secondary"
            onClick={() => setType("tv")}>TV SHOWS</Button>
          </div>
          <div className="absolute bottom-50 left-10 w-[50%] space-y-6">
            <h3 className="text-6xl font-bold tracking-normal uppercase">{heroMovie.title?? heroMovie.name?? "Untitled"}</h3>

            <p className="text-lg">{heroMovie.overview}</p>
            <div className=" flex  gap-4">
              <ButtonLink to="/" className="px-12 py-4 rounded-full text-xl">
                Watch Now
              </ButtonLink>
              <ButtonLink to="/" variant="outline" className="px-12 py-2 rounded-full text-xl">
                Trailer
              </ButtonLink>
            </div>
          </div>
        </section>
      )}

      {featuredError && (
        <ErrorMessage message={featuredError} onRetry={() => {
          setFeaturedError(null);
          setFeaturedLoading(true);
        }} />)}

      <section className="mt-6 w-[80%] mx-auto">
        <GenreFilters
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {
            media.map((item) => {
              const movieGenres = getGenreNames(item.genre_ids ?? [], genres);
              const releaseYear = item.release_date || item.first_air_date || "N/A";
              return (
                <MediaCard
                  key={item.id}
                  title={item.title?? item.name?? "Untitled"}
                  posterUrl={getPosterUrl(item.poster_path, "w500") ?? "/images/Interstellar.jpeg"}
                  rating={item.vote_average}
                  releaseYear={
                     new Date(releaseYear).getFullYear()
                     
                  }
                  genres={movieGenres}
                />
              );
            })}

        </div>
      </section>
    </main>
  );
}
