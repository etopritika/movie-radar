"use client";

import { getPosterSrc } from "@/lib/helpers";
import type { MovieDetails } from "@/lib/types";
import { useModal } from "@/providers/modal-provider";
import Image from "next/image";
import { MovieDetailsSkeleton } from "../skeletons/movie-details-skeleton";
import ToggleLibrary from "./toggle-library";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const MovieDetails: React.FC = () => {
  const { data, loading, error, setClose } = useModal<MovieDetails>();

  if (loading) {
    return <MovieDetailsSkeleton />;
  }

  if (error && !data) {
    return (
      <div className="flex flex-col items-center space-y-3 sm:space-y-5">
        <h3 className="text-xl sm:text-2xl">Something went wrong.</h3>
        <Button
          onClick={setClose}
          className="rounded-full border-none bg-red-700 px-8 py-[14px] text-xs font-medium uppercase leading-[14px] text-white transition-colors hover:bg-red-400 sm:text-sm"
        >
          Close windov <X />
        </Button>
      </div>
    );
  }

  const posterSrc = getPosterSrc(data?.poster_path);
  const overview = data?.overview || "Overview is not available.";
  const genres = data?.genres?.map((genre) => genre.name).join(", ") || "N/A";
  const ids = data?.genres?.map(
    (genre: { id: number; name: string }) => genre.id,
  );

  return (
    <div className="space-y-5 sm:flex sm:justify-between">
      <Image
        src={posterSrc}
        width={375}
        height={478}
        alt="Movie poster"
        className="h-fit w-full rounded-[5px] sm:w-[254px] md:w-[264px] xl:w-[375px]"
      />
      <div className="space-y-5 sm:max-w-[240px] md:max-w-[264px] xl:max-w-[391px]">
        <h2 className="text-xl font-medium leading-6 xl:text-3xl">
          {data.title}
        </h2>
        <dl className="space-y-2 text-xs font-medium leading-4">
          <div className="flex">
            <dt className="min-w-[108px] text-mutedGray">Vote / Votes</dt>
            <dd className="leading-[14px]">
              <span className="rounded border-none bg-red-700 px-2.5 py-[1px] text-white">
                {data.vote_average}
              </span>{" "}
              / {data.vote_count}
            </dd>
          </div>
          <div className="flex">
            <dt className="min-w-[108px] text-mutedGray">Popularity</dt>
            <dd className="leading-[14px]">{data.popularity}</dd>
          </div>
          <div className="flex">
            <dt className="min-w-[108px] text-mutedGray">Original Title</dt>
            <dd>{data.original_title}</dd>
          </div>
          <div className="flex">
            <dt className="min-w-[108px] text-mutedGray">Genre</dt>
            <dd>{genres}</dd>
          </div>
        </dl>
        <div className="space-y-2 text-xs font-medium">
          <span className="uppercase leading-4">About</span>
          <p className="leading-5">{overview}</p>
        </div>
        <ToggleLibrary
          data={{
            id: data.id,
            title: data.title,
            poster_path: data.poster_path,
            overview: overview,
            genre_ids: ids,
            release_date: data.release_date,
          }}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
