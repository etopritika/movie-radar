import MovieGallery from "@/components/movie-gallery";
import MoviePagination from "@/components/pagination";
import RefreshButton from "@/components/custom-buttons/refresh-button";
import { fetchMoviesByName } from "@/lib/api";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ query: string[] }>;
}) {
  const query = (await params).query;
  const searchQuery = query[0] || "";
  const page = Number(query[1]) || 1;
  const response = await fetchMoviesByName(searchQuery, page);
  const { results, total_pages, error } = response;

  if (error) {
    return (
      <section className="flex h-[50vh] flex-col items-center justify-center space-y-3 text-white">
        <p>Error: {error}</p>
        <RefreshButton />
      </section>
    );
  }

  const isResult = results.length > 0;

  return (
    <section>
      <h1 className="sr-only">Results for - {searchQuery}</h1>
      {isResult ? (
        <>
          <MovieGallery movies={results} />
          <MoviePagination
            currentPage={page}
            totalPages={total_pages}
            query={searchQuery}
          />
        </>
      ) : (
        <div className="flex h-[50vh] items-center justify-center text-white">
          <p>No results found for your search.</p>
        </div>
      )}
    </section>
  );
}
