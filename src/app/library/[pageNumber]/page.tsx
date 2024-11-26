"use client";

import MoviePagination from "@/components/pagination";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LocalStorageMovie } from "@/lib/types";
import MovieGalleryClient from "@/components/movie-gallery/movie-gallery-client";
import { GallerySkeleton } from "@/components/skeletons/gallery-skeleton";
import { useLibraryStore } from "@/store/update-library";

export default function Library() {
  const updateTrigger = useLibraryStore((state) => state.updateTrigger);
  const [movies, setMovies] = useState<LocalStorageMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const splitedPath = pathname.split("/")[2];

  const page = Number(splitedPath) || 1;
  const itemsPerPage = 20;

  useEffect(() => {
    setLoading(true);

    try {
      const savedMovies = JSON.parse(localStorage.getItem("movies") || "[]");

      if (savedMovies.length > 0) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;
        const paginatedMovies = savedMovies.slice(startIndex, endIndex);
        setMovies(paginatedMovies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      setMovies([]);
    }

    setLoading(false);
  }, [page, updateTrigger]);

  const totalPages = Math.ceil(
    (JSON.parse(localStorage.getItem("movies") || "[]").length || 0) /
      itemsPerPage
  );

  return (
    <section>
      <h1 className="sr-only">Movie Library</h1>
      {loading ? <GallerySkeleton /> : <MovieGalleryClient movies={movies} />}
      <MoviePagination currentPage={page} totalPages={totalPages} />
    </section>
  );
}
