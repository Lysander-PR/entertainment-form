import { TypeEntertainment } from "@/types/enums/type-entertainment.enum";

export const entertainmentOptions: { label: string; value: TypeEntertainment }[] = [
  { label: "Album", value: TypeEntertainment.ALBUM },
  { label: "Movie", value: TypeEntertainment.MOVIE },
  { label: "Book", value: TypeEntertainment.BOOK }
];
