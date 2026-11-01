const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

import type { Movie, PaginatedResponse } from "../../types/media";

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
      `TMDB request failed: ${response.status} ${response.statusText}`
    );
  }

  return (await response.json()) as T;
}

export function getTrendingMovies(
  timeWindow: "day" | "week",
  page = 1,
  signal?: AbortSignal
): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch<PaginatedResponse<Movie>>(
    `/trending/movie/${timeWindow}`,
    { page: String(page) },
    signal
  );
}

export function getPopularMovies(
  page = 1,
  signal?: AbortSignal
): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch<PaginatedResponse<Movie>>(
    "/movie/popular",
    { page: String(page) },
    signal
  );
}