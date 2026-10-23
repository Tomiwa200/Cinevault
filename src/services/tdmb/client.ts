const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const TMDB_ACCESS_TOKEN =
  import.meta.env.VITE_TMDB_ACCESS_TOKEN as string | undefined;

interface RequestOptions {
  signal?: AbortSignal;
}

export async function tmdbFetch<T>(
  endpoint: string,
  params: Record<string, string | number | undefined> = {},
  options: RequestOptions = {},
): Promise<T> {
  if (!TMDB_ACCESS_TOKEN) {
    throw new Error(
      "TMDB access token is missing. Check your .env.local file.",
    );
  }

  const url = new URL(`${TMDB_BASE_URL}${endpoint}`);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") {
      url.searchParams.set(key, String(value));
    }
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
      Accept: "application/json",
    },
    signal: options.signal,
  });

  if (!response.ok) {
    throw new Error(
      `TMDB request failed: ${response.status} ${response.statusText}`,
    );
  }

  return (await response.json()) as T;
}