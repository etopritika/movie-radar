import MovieGallery from "@/components/movie-gallery";
import { fetchMovies } from "@/lib/api";
import { Movie } from "@/lib/types";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ query: string[] }>;
}) {
  const query = (await params).query;
  const searchQuery = query[0] || "";
  const page = Number(query[1]) || 1;
  const movies = (await fetchMovies(searchQuery, page)) as Movie[];

  return (
    <section className="pb-10 sm:pb-12 md:pb-[60px]">
      <h1 className="sr-only">Results for - {searchQuery}</h1>
      <MovieGallery movies={movies} />
    </section>
  );
}
