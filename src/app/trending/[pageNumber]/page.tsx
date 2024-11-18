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

  const movies = await fetchTrending(page);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trending Movies (Page {page})</h1>
      <ul>
        {movies.map((movie: Movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
