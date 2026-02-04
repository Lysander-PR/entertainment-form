import { TypeEntertainment } from "@/types/enums/type-entertainment.enum";

export const entityOptions: { label: string; value: TypeEntertainment }[] = [
  { label: "Song", value: TypeEntertainment.SONG },
  { label: "Movie", value: TypeEntertainment.MOVIE },
  { label: "Book", value: TypeEntertainment.BOOK }
];
