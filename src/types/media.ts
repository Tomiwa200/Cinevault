export type MediaType = "movie" | "tv";

export interface MediaCardData {
  id: number;
  mediaType: MediaType;
  title: string;
  overview: string;
  posterPath: string | null;
  releaseDate: string | null;
  rating: number;
}