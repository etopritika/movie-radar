"use client";

import { Genres } from "@/lib/types";
import Image from "next/image";
import { useModal } from "@/providers/modal-provider";
import CustomModal from "../custom-modal/custom-modal";
import MovieDetails from "../movie-details";
import { fetchMovieByID } from "@/lib/api";

const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
const PLACEHOLDER_IMAGE =
  "https://placehold.co/395x574/000000/FFF?text=No+image";

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  genre_ids: number[];
}

function getPosterSrc(posterPath: string | null): string {
  return posterPath ? `${BASE_IMAGE_URL}/w500${posterPath}` : PLACEHOLDER_IMAGE;
}

function getFormattedDate(date: string | null): string {
  return date?.split("-")[0] || "date missing";
}

function getGenreList(genreIds: number[]): string[] {
  return genreIds.map((id) => Genres[id] || "Unknown");
}

export default function MovieCard({
  id,
  title,
  poster_path,
  overview,
  release_date,
  genre_ids = [],
}: MovieCardProps) {
  const { setOpen } = useModal();

  const posterSrc = getPosterSrc(poster_path);
  const releaseDate = getFormattedDate(release_date);
  const genres = getGenreList(genre_ids);

  const handleOpenModal = () => {
    setOpen(
      <CustomModal
        title="Projekt löschen"
        subheading="Das Projekt wird gelöscht und Sie müssen die Entwickler kontaktieren, um es wiederherzustellen."
        className="bg-white"
      >
        <MovieDetails />
      </CustomModal>,
      () => fetchMovieByID(id)
    );
  };

  return (
    <li className="relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_18px_rgba(255,0,0,0.6)] rounded-[10px] sm:rounded-[15px] overflow-hidden">
      <button onClick={handleOpenModal} className="w-full h-full">
        <Image
          className="h-full w-full max-h-[402px] sm:max-h-[455px] md:max-h-[455px] xl:max-h-[574px]"
          src={posterSrc}
          alt={overview || "No overview available"}
          width={395}
          height={574}
        />
        <div className="sr-only">
          <h3>{title}</h3>
          <div>
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            <time>{releaseDate}</time>
          </div>
        </div>
      </button>
    </li>
  );
}
