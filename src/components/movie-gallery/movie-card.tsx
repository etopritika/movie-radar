import { Genres } from "@/lib/types";
import Image from "next/image";

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

function getGenreName(genreId: number): string {
  return Genres[genreId] || "Unknown";
}

export default function MovieCard({
  //   id,
  title,
  poster_path,
  overview,
  release_date,
  genre_ids = [],
}: MovieCardProps) {
  const posterSrc = poster_path
    ? `${BASE_IMAGE_URL}/w500${poster_path}`
    : PLACEHOLDER_IMAGE;

  const releaseDate = release_date?.split("-")[0] || "date missing";

  return (
    <li className="relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_18px_rgba(255,0,0,0.6)] rounded-[10px] sm:rounded-[15px] overflow-hidden">
      <button className="w-full h-full">
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
              {genre_ids.map((genreId: number) => (
                <li key={genreId}>{getGenreName(genreId)}</li>
              ))}
            </ul>
            <time>{releaseDate}</time>
          </div>
        </div>
      </button>
    </li>
  );
}
