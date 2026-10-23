export type MediaType = "movie" | "tv";

export interface Media {
  id: number;
  media_type?: MediaType;

  title?: string;
  name?: string;

  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;

  release_date?: string;
  first_air_date?: string;

  vote_average: number;
  vote_count?: number;

  genre_ids?: number[];
  genres?: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface MediaDetails extends Media {
  genres: Genre[];
  runtime?: number | null;
  episode_run_time?: number[];
  status?: string;
  tagline?: string;
  homepage?: string;
}