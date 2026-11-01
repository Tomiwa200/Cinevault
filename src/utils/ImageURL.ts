const IMAGE_BASE_URL =
  "https://image.tmdb.org/t/p";

export function getPosterUrl(
  path: string | null,
  size: "w342" | "w500" | "w780" | "w1280" | "w1920" = "w500",
): string | null {
  if (!path) {
    return null;
  }

  return `${IMAGE_BASE_URL}/${size}${path}`;
}