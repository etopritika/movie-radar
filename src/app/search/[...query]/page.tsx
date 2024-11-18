import { Movie } from "@/lib/types";
import { fetchMovies } from "./actions";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ query: string[] }>;
}) {
  const query = (await params).query;
  const searchQuery = query[0] || "";
  const page = Number(query[1]) || 1;
  const movies = await fetchMovies(searchQuery, page);
  // console.log(movies);
  return (
    <div>
      <ul>
        {movies.map((movie: Movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}