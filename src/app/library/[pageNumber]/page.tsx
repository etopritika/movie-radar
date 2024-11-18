// import { Movie } from "@/lib/types";

export default async function Library({
  params,
}: {
  params: Promise<{ pageNumber: string[] }>;
}) {
  //   const { pageNumber } = await params;
  //   const page = Number(pageNumber) || 1;
  return (
    <div>
      <span>Library</span>
      {/* <ul>
        {movies.map((movie: Movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
