"use client";

import MovieCard from "./movie-card";
import MoviePagination from "../pagination";
import { useMoviesStore } from "@/store/use-movie-store";
import { GallerySkeleton } from "../skeletons/gallery-skeleton";

interface MovieGalleryClientProps {
  pageNumber: number;
}

export default function MovieGalleryClient({
  pageNumber,
}: MovieGalleryClientProps) {
  const { movies, loading } = useMoviesStore();

  const itemsPerPage = 20;

  if (loading) {
    return <GallerySkeleton />;
  }

  if (movies.length === 0) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center space-y-3 text-white">
        <p>Your library is empty. Add movies to appear here.</p>
      </div>
    );
  }

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const paginatedMovies = movies.slice(
    (pageNumber - 1) * itemsPerPage,
    pageNumber * itemsPerPage,
  );

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
