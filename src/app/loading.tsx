import { GallerySkeleton } from "@/components/gallery-skeleton/gallery-skeleton";

export default function Loading() {
  return (
    <section className="pb-10 sm:pb-12 md:pb-[60px]">
      <h1 className="sr-only">Loading Movies...</h1>
      <GallerySkeleton />
    </section>
  );
}
