import { IBaseMovie } from "@/lib/types";
// import MovieCard from "./movie-card";
import MovieTable from "../movie-table";

interface MovieGalleryProps {
  movies: IBaseMovie[];
}

export default function MovieGallery({ movies }: MovieGalleryProps) {
  return (
    <div className="mb-10 sm:mb-[60px]">
      {/* <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
          ),
        )}
      </ul> */}
      <MovieTable movies={movies} />
    </div>
  );
}
