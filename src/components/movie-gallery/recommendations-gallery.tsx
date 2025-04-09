"use client";

import { useEffect, useState } from "react";
import MovieCard from "./movie-card";
import MoviePagination from "../pagination";
import { useLibraryStore } from "@/store/use-library-store";
import { GallerySkeleton } from "../skeletons/gallery-skeleton";
import { getRecommendations } from "@/lib/api-client";
import RefreshButton from "../custom-buttons/refresh-button";

export default function MovieRecommendationsGallery({
  pageNumber,
}: {
  pageNumber: number;
}) {
  const { movies } = useLibraryStore();
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(recommendations.length / itemsPerPage);
  const paginatedMovies = recommendations.slice(
    (pageNumber - 1) * itemsPerPage,
    pageNumber * itemsPerPage,
  );

  useEffect(() => {
    getRecommendations(movies).then((data) => {
      if (data.errorMessage) {
        setError(data.errorMessage);
      } else {
        setRecommendations(data.recommended_movies);
      }
      setLoading(false);
    });
  }, [movies]);

  if (loading) {
    return <GallerySkeleton />;
  }

  if (movies.length === 0) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center space-y-3 text-white">
        <p>
          To get recommendations — add some of your favorite movies to your
          library 🎬
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <section className="flex h-[50vh] flex-col items-center justify-center space-y-3 text-white">
        <p>Error: {error}</p>
        <RefreshButton />
      </section>
    );
  }

  return (
    <>
      <div className="mb-10 sm:mb-[60px]">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {paginatedMovies.map(
            ({ id, title, poster_path, overview, release_date, genre_ids }) => (
              <MovieCard
                key={id}
                id={id}
                title={title}
                poster_path={poster_path}
                overview={overview}
                release_date={release_date}
                genre_ids={genre_ids}
              />
            ),
          )}
        </ul>
      </div>
      <MoviePagination currentPage={pageNumber} totalPages={totalPages} />
    </>
  );
}
