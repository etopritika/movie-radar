export async function fetchTrending(page: number = 1) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}&language=en-US`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  const data = await response.json();
  return data.results || [];
}

export async function fetchMovies(searchQuery: string, page: number = 1) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
    searchQuery
  )}&page=${page}&language=en-US&include_adult=false`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();
  return data.results || [];
}
