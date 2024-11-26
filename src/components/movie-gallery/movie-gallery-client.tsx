"use client";

import { LocalStorageMovie } from "@/lib/types";
import MovieCard from "./movie-card";
import { useLibraryStore } from "@/store/update-library";
import { useEffect, useState } from "react";
import MoviePagination from "../pagination";

interface MovieGalleryClientProps {
  page: number;
}

export default function MovieGalleryClient({ page }: MovieGalleryClientProps) {
  const updateTrigger = useLibraryStore((state) => state.updateTrigger);
  const [movies, setMovies] = useState<LocalStorageMovie[]>([]);
  const [totalMovies, setTotalMovies] = useState(0);

  const itemsPerPage = 20;

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("movies") || "[]");

    setTotalMovies(savedMovies.length);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const paginatedMovies = savedMovies.slice(startIndex, endIndex);

    setMovies(paginatedMovies);
  }, [page, updateTrigger]);

  const totalPages = Math.ceil(totalMovies / itemsPerPage);

  return (
    <>
      <div className="mb-10 sm:mb-[60px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-8 xl:gap-x-4 xl:gap-y-8">
          {movies.map(
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
            )
          )}
        </ul>
      </div>
      <MoviePagination currentPage={page} totalPages={totalPages} />
    </>
  );
}
