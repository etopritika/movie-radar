import MovieGallery from "@/components/movie-gallery";
import MoviePagination from "@/components/pagination";
import RefreshButton from "@/components/custom-buttons/refresh-button";
import { fetchTrending } from "@/lib/api";

export async function generateStaticParams() {
  const totalPages = 3;
  const params = Array.from({ length: totalPages }, (_, index) => ({
    pageNumber: (index + 1).toString(),
  }));

  return params;
}

export default async function Trending({
  params,
}: {
  params: Promise<{ pageNumber: string }>;
}) {
  const { pageNumber } = await params;

  const page = Number(pageNumber) || 1;

  const response = await fetchTrending(page);
  const { results, total_pages, error } = response;

  if (error) {
    return (
      <section className="flex h-[50vh] flex-col items-center justify-center space-y-3 text-white">
        <p>Error: {error}</p>
        <RefreshButton />
      </section>
    );
  }

  return (
    <section>
      <h1 className="sr-only">Trending Movies</h1>
      <MovieGallery movies={results} />
      <MoviePagination currentPage={page} totalPages={total_pages} />
    </section>
  );
}
