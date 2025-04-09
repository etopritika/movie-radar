import { LocalStorageMovie } from "./types";

export async function getRecommendations(favorites: LocalStorageMovie[]) {
  try {
    const response = await fetch(
      "https://movie-ai-backend.onrender.com/recommendations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favorites }),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch recommendations: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return {
      recommended_movies: [],
      errorMessage:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
