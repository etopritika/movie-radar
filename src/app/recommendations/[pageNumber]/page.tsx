import MovieRecommendationsGallery from "@/components/movie-gallery/recommendations-gallery";

export default async function MovieRecommendationsPage({
  params,
}: {
  params: Promise<{ pageNumber: string }>;
}) {
  const { pageNumber } = await params;

  const page = Number(pageNumber) || 1;

  return (
    <section>
      <h1 className="sr-only">Movie recommendations</h1>
      <MovieRecommendationsGallery pageNumber={page} />
    </section>
  );
}
