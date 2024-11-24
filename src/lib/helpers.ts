import { Genres } from "@/lib/types";

export const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
export const PLACEHOLDER_IMAGE =
  "https://placehold.co/395x574/000000/FFF?text=No+image";

export function getPosterSrc(posterPath: string | null): string {
  return posterPath ? `${BASE_IMAGE_URL}/w500${posterPath}` : PLACEHOLDER_IMAGE;
}

export function getFormattedDate(date: string | null): string {
  return date?.split("-")[0] || "date missing";
}

export function getGenreList(genreIds: number[]): string[] {
  return genreIds.map((id) => Genres[id] || "Unknown");
}
