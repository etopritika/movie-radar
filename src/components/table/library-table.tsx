"use client";

import { getGenreList } from "@/lib/helpers";
import { IBaseMovie } from "@/lib/types";
import { useModal } from "@/providers/modal-provider";
import React, { useState } from "react";
import CustomModal from "../custom-modal";
import MovieDetails from "../movie-details";

interface LibraryTableProps {
  movies: IBaseMovie[];
}

const LibraryTable: React.FC<LibraryTableProps> = ({ movies }) => {
  const { setOpen } = useModal();
  const [sortedMovies, setSortedMovies] = useState<IBaseMovie[]>(movies);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof IBaseMovie | "current_date" | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  const handleSort = (key: keyof IBaseMovie | "current_date") => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...sortedMovies].sort((a, b) => {
      if (key === "current_date") {
        const dateA = new Date(a[key]!).getTime();
        const dateB = new Date(b[key]!).getTime();
        return direction === "asc" ? dateA - dateB : dateB - dateA;
      }

      if (a[key]! < b[key]!) return direction === "asc" ? -1 : 1;
      if (a[key]! > b[key]!) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedMovies(sorted);
  };

  const handleOpenModal = (id: number) => {
    setOpen(
      <CustomModal
        title="Film Information"
        subheading="Get to know the movie better"
        className="max-w-[280px] bg-white px-7 pb-10 pt-12 sm:max-w-[576px] md:max-w-[704px] md:px-9 md:pb-16 md:pr-[72px] md:pt-10 xl:max-w-[806px] xl:px-3 xl:py-10"
      >
        <MovieDetails movieId={id} />
      </CustomModal>,
    );
  };

  return (
    <table className="w-full table-auto border-collapse text-white">
      <thead>
        <tr>
          <th
            className="cursor-pointer border px-4 py-2"
            onClick={() => handleSort("title")}
          >
            Movie Name{" "}
            {sortConfig.key === "title"
              ? sortConfig.direction === "asc"
                ? "↑"
                : "↓"
              : ""}
          </th>
          <th className="border px-4 py-2">Genres</th>
          <th
            className="cursor-pointer border px-4 py-2"
            onClick={() => handleSort("current_date")}
          >
            Added Date{" "}
            {sortConfig.key === "current_date"
              ? sortConfig.direction === "asc"
                ? "↑"
                : "↓"
              : ""}
          </th>
          <th className="border px-4 py-2">Overview</th>
        </tr>
      </thead>
      <tbody>
        {sortedMovies.map((movie) => {
          const genres = getGenreList(movie.genre_ids);
          return (
            <tr key={movie.id}>
              <td className="border px-4 py-2">{movie.title}</td>
              <td className="border px-4 py-2">
                <ul>
                  {genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                  ))}
                </ul>
              </td>
              <td className="border px-4 py-2">
                {movie.current_date
                  ? movie.current_date.toISOString().split("T")[0]
                  : "Unknown"}
              </td>
              <td className="border px-4 py-2">
                <button
                  className="text-blue-500 underline"
                  onClick={() => handleOpenModal(movie.id)}
                >
                  Overview
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LibraryTable;
