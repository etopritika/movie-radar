import MovieGallery from "@/components/movie-gallery";
import MoviePagination from "@/components/pagination";
import { fetchMovies } from "@/lib/api";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ query: string[] }>;
}) {
  const query = (await params).query;
  const searchQuery = query[0] || "";
  const page = Number(query[1]) || 1;
  const response = await fetchMovies(searchQuery, page);

  return (
    <section className="pb-10 sm:pb-12 md:pb-[60px]">
      <h1 className="sr-only">Results for - {searchQuery}</h1>
      <MovieGallery movies={response.results} />
      <MoviePagination
        currentPage={page}
        totalPages={response.total_pages}
        query={searchQuery}
      />
    </section>
  );
}
