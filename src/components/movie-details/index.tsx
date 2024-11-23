"use client";

import { getPosterSrc } from "@/lib/helpers";
import type { MovieDetails } from "@/lib/types";
import { useModal } from "@/providers/modal-provider";
import Image from "next/image";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const MovieDetails: React.FC = () => {
  const { data, loading } = useModal<MovieDetails>();
  console.log("data:", typeof data);
  const posterSrc = getPosterSrc(data?.poster_path);

  return (
    <>
      {data && (
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
                <dd>
                  {data?.genres
                    .map((genre: { id: number; name: string }) => genre.name)
                    .join(", ")}
                </dd>
              </div>
            </dl>
            <div className="font-medium text-xs space-y-2">
              <span className="uppercase leading-4">About</span>
              <p className="leading-5">{data.overview}</p>
            </div>
            <Button className="flex items-center justify-center w-full text-white bg-red-700 text-xs leading-[14px] font-medium uppercase rounded-full py-[14px] px-8 border-none hover:bg-red-400 space-x-2">
              <span>add to queue</span>
              <Plus />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
