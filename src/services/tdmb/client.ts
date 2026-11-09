const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const IMG = "https://image.tmdb.org/t/p/w500";
export const IMG_BIG = "https://image.tmdb.org/t/p/original";


import type { Genre, Media, PaginatedResponse } from "../../types/media";

 async function tmdbFetch<T>(
 path: string,
 params: Record<string, string> = {},
 signal?: AbortSignal
): Promise<T>{
   if (!API_KEY) {
    throw new Error(
      "TMDB API key is missing"
    );
  }

  const url = new URL(`${BASE_URL}${path}`);

  url.searchParams.set('api_key', API_KEY);

 for(const [key, value] of Object.entries(params)){
   url.searchParams.set(key, value);
 }

 const response = await fetch(url, { signal });

 if (!response.ok) {
    throw new Error(
      `Request failed: ${response.status} ${response.statusText}`
    );
  }

  return (await response.json()) as T;
}

export function getTrendingMovies(
  timeWindow: "day" | "week",
  page = 1,
  signal?: AbortSignal
): Promise<PaginatedResponse<Media>> {
  return tmdbFetch<PaginatedResponse<Media>>(
    `/trending/movie/${timeWindow}`,
    { page: String(page) },
    signal
  );
}

export function getPopularMovies(
  type: "movie" | "tv" = "movie",
  page = 1,
  signal?: AbortSignal
): Promise<PaginatedResponse<Media>> {
  return tmdbFetch<PaginatedResponse<Media>>(
    `/${type}/popular`,
    { page: String(page) },
    signal
  );
}

export function getMoviesByGenre(
   type: "movie" | "tv" = "movie",
  genreId: number,
  page = 1,
  signal?: AbortSignal
): Promise<PaginatedResponse<Media>> {
  return tmdbFetch<PaginatedResponse<Media>>(
    `/discover/${type}`,
    { with_genres: String(genreId), page: String(page) },
    signal
  );
}

export function getMovieGenres(): Promise<{ genres: Genre[] }> {
  return tmdbFetch<{ genres: Genre[] }>("/genre/movie/list");
}

export function getGenreNames(
  genreIds: number[] = [],
  genres: Genre[]
): string[] {
  return genreIds
    .map((id) => genres.find((genre) => genre.id === id)?.name)
    .filter((name): name is string => Boolean(name));
}