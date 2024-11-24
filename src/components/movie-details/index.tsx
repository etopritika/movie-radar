"use client";

import { getPosterSrc } from "@/lib/helpers";
import type { MovieDetails } from "@/lib/types";
import { useModal } from "@/providers/modal-provider";
import Image from "next/image";
import { MovieDetailsSkeleton } from "../skeletons/movie-details-skeleton";
import ToggleLibrary from "./toggle-library";

const MovieDetails: React.FC = () => {
  const { data, loading } = useModal<MovieDetails>();

  const posterSrc = getPosterSrc(data?.poster_path);
  const overview = data?.overview || "Overview is not available.";
  const genres = data?.genres?.map((genre) => genre.name).join(", ") || "N/A";

  if (loading) {
    return <MovieDetailsSkeleton />;
  }

  return (
    <div className="space-y-5 sm:flex sm:justify-between">
      <Image
        src={posterSrc}
        width={375}
        height={478}
        alt="Movie poster"
        className="w-[240px] rounded-[5px] sm:w-[254px] sm:h-fit md:w-[264px] xl:w-[375px]"
      />
      <div className="space-y-5 sm:max-w-[240px] md:max-w-[264px] xl:max-w-[391px]">
        <h2 className="text-xl leading-6 font-medium xl:text-3xl">
          {data.title}
        </h2>
        <dl className="text-xs font-medium leading-4 space-y-2">
          <div className="flex">
            <dt className="text-mutedGray min-w-[108px]">Vote / Votes</dt>
            <dd className="leading-[14px]">
              <span className="border-none bg-red-700 text-white px-2.5 py-[1px] rounded">
                {data.vote_average}
              </span>{" "}
              / {data.vote_count}
            </dd>
          </div>
          <div className="flex">
            <dt className="text-mutedGray min-w-[108px]">Popularity</dt>
            <dd className="leading-[14px]">{data.popularity}</dd>
          </div>
          <div className="flex">
            <dt className="text-mutedGray min-w-[108px]">Original Title</dt>
            <dd>{data.original_title}</dd>
          </div>
          <div className="flex">
            <dt className="text-mutedGray min-w-[108px]">Genre</dt>
            <dd>{genres}</dd>
          </div>
        </dl>
        <div className="font-medium text-xs space-y-2">
          <span className="uppercase leading-4">About</span>
          <p className="leading-5">{overview}</p>
        </div>
        <ToggleLibrary
          data={{
            id: data.id,
            title: data.title,
            poster_path: data.poster_path,
            overview: overview,
          }}
          onToggle={(checked) => {
            if (checked) {
              console.log("Додано до черги");
            } else {
              console.log("Видалено з черги");
            }
          }}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
