import type { EntityType } from "@/types/entertainment.type";

export const entityOptions: { label: string; value: EntityType }[] = [
  { label: "Song", value: "song" },
  { label: "Movie", value: "movie" },
  { label: "Book", value: "book" }
];
