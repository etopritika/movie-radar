import { IBaseMovie } from "@/lib/types";
import MovieCard from "./movie-card";

interface MovieGalleryProps {
  movies: IBaseMovie[];
}

export default function MovieGallery({ movies }: MovieGalleryProps) {
  return (
    <div className="mb-10 sm:mb-[60px]">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-8 xl:gap-x-4 xl:gap-y-8">
        {movies.map(
          ({ id, title, poster_path, overview, release_date, genre_ids }) => (
            <MovieCard
              key={id}
              id={id}
              title={title}
              poster_path={poster_path}
              overview={overview}
              release_date={release_date}
              genre_ids={genre_ids}
            />
          )
        )}
      </ul>
    </div>
  );
}
