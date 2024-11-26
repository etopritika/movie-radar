"use client";

import Image from "next/image";
import { useModal } from "@/providers/modal-provider";
import CustomModal from "../custom-modal/custom-modal";
import MovieDetails from "../movie-details";
import { fetchMovieByID } from "@/lib/api";
import { getFormattedDate, getGenreList, getPosterSrc } from "@/lib/helpers";

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  genre_ids?: number[];
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
        title=""
        subheading=""
        className="bg-white px-7 pt-12 pb-10 max-w-[280px] sm:max-w-[576px] md:max-w-[704px] xl:max-w-[806px] md:pt-10 md:px-9 md:pb-16 md:pr-[72px] xl:py-10 xl:px-3"
      >
        <MovieDetails />
      </CustomModal>,
      () => fetchMovieByID(id),
      id
    );
  };

  return (
    <li className="relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_18px_rgba(255,0,0,0.6)] rounded-[10px] sm:rounded-[15px] overflow-hidden border-none">
      <button onClick={handleOpenModal} className="w-full h-full">
        <Image
          className="w-full h-full object-cover"
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
