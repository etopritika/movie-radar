import MovieGallery from "@/components/movie-gallery";
import MoviePagination from "@/components/pagination";
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
  return (
    <section>
      <h1 className="sr-only">Trending Movies</h1>
      {response.results.length > 0 ? (
        <>
          <MovieGallery movies={response.results} />
          <MoviePagination
            currentPage={page}
            totalPages={response.total_pages}
          />
        </>
      ) : (
        <div className="flex h-[50vh] items-center justify-center text-white">
          <p>Failed to load trending movies. Please try again later.</p>
        </div>
      )}
    </section>
  );
}
