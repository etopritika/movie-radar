"use server";

export async function fetchTrending(page: number = 1) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}&language=en-US`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch trending movies. HTTP status: ${response.status}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchTrending:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return { results: [], total_pages: 0, error: errorMessage };
  }
}

export async function fetchMoviesByName(searchQuery: string, page: number = 1) {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      searchQuery,
    )}&page=${page}&language=en-US&include_adult=false`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch movies. HTTP status: ${response.status}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchMoviesByName:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return { results: [], total_pages: 0, error: errorMessage };
  }
}

export async function fetchMovieByID(movieId: number) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch the movie details. HTTP status: ${response.status}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchMovieByID:", error);
    throw new Error("An error occurred while fetching the movie details.");
  }
}
