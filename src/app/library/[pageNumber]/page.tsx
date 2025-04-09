import LibraryGallery from "@/components/movie-gallery/library-gallery";

export default async function MovieLibraryPage({
  params,
}: {
  params: Promise<{ pageNumber: string }>;
}) {
  const { pageNumber } = await params;

  const page = Number(pageNumber) || 1;

  return (
    <section>
      <h1 className="sr-only">Movie Library</h1>
      <LibraryGallery pageNumber={page} />
    </section>
  );
}
