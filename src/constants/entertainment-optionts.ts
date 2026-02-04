import { TypeEntertainment } from "@/types/enums/type-entertainment.enum";

export const entertainmentOptions: { label: string; value: TypeEntertainment }[] = [
  { label: "Song", value: TypeEntertainment.SONG },
  { label: "Movie", value: TypeEntertainment.MOVIE },
  { label: "Book", value: TypeEntertainment.BOOK }
];
