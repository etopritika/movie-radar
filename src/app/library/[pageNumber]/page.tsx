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
    setMovies(savedMovies);
  }, []);

  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const displayedMovies = movies.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <section>
      <h1 className="sr-only">Movie Library</h1>
      <MovieGallery movies={displayedMovies} />
      <MoviePagination currentPage={page} totalPages={totalPages} />
    </section>
  );
}
