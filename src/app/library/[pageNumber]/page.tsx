"use client";

import MovieGallery from "@/components/movie-gallery";
import MoviePagination from "@/components/pagination";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LocalStorageMovie } from "@/lib/types";

export default function Library() {
  const [movies, setMovies] = useState<LocalStorageMovie[]>([]);
  const pathname = usePathname();
  const splitedPath = pathname.split("/")[2];

  const page = Number(splitedPath) || 1;
  const itemsPerPage = 20;

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    const paginatedMovies = savedMovies.slice(startIndex, endIndex);
    setMovies(paginatedMovies);
  }, [page]);

  const totalPages = Math.ceil(
    (JSON.parse(localStorage.getItem("movies") || "[]").length || 0) /
      itemsPerPage
  );

  return (
    <section>
      <h1 className="sr-only">Movie Library</h1>
      <MovieGallery movies={movies} />
      <MoviePagination currentPage={page} totalPages={totalPages} />
    </section>
  );
}
