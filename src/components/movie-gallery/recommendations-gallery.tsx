"use client";

import { useEffect, useState } from "react";
import MovieCard from "./movie-card";
import MoviePagination from "../pagination";
import { useLibraryStore } from "@/store/use-library-store";
import { GallerySkeleton } from "../skeletons/gallery-skeleton";
import { getRecommendations } from "@/lib/api-client";
import RefreshButton from "../custom-buttons/refresh-button";
import { Hourglass } from "lucide-react";

export default function MovieRecommendationsGallery({
  pageNumber,
}: {
  pageNumber: number;
}) {
  const { movies } = useLibraryStore();
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [wakingUp, setWakingUp] = useState(false);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(recommendations.length / itemsPerPage);
  const paginatedMovies = recommendations.slice(
    (pageNumber - 1) * itemsPerPage,
    pageNumber * itemsPerPage,
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWakingUp(true);
    }, 4000);

    getRecommendations(movies).then((data) => {
      clearTimeout(timeout);
      if (data.errorMessage) {
        setError(data.errorMessage);
      } else {
        setRecommendations(data.recommended_movies);
      }
      setLoading(false);
    });
  }, [movies]);

  if (loading) {
    return wakingUp ? (
      <section className="flex h-[50vh] flex-col items-center justify-center space-y-3 text-white">
        <div className="flex items-center gap-2">
          <p className="flex flex-col text-white">
            Waking up the recommendation engine... Please wait.
          </p>
          <Hourglass className="animate-hourglass" />

          <style>
            {`
      @keyframes hourglass-rotate {
        0% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(180deg);
        }
        50% {
          transform: rotate(180deg);
        }
        75% {
          transform: rotate(360deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .animate-hourglass {
        animation: hourglass-rotate 2s infinite ease-in-out;
        display: inline-block;
      }
    `}
          </style>
        </div>
      </section>
    ) : (
      <GallerySkeleton />
    );
  }

  if (movies.length === 0) {
    return (
      <section className="flex h-[50vh] flex-col items-center justify-center space-y-3 text-white">
        <p>
          To get recommendations — add some of your favorite movies to your
          library 🎬
        </p>
      </section>
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
