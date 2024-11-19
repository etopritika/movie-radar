import MovieGallery from "@/components/movie-gallery";
import { fetchTrending } from "@/lib/api";
import { Movie } from "@/lib/types";

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

  const movies = (await fetchTrending(page)) as Movie[];
  return (
    <section>
      <h1 className="sr-only">Trending Movies</h1>
      <MovieGallery movies={movies} />
    </section>
  );
}
