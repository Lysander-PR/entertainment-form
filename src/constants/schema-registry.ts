import { schema as songSchema } from "@/songs/schema/songs.schema"
import { schema as movieSchema } from "@/movies/schema/movies.schema"
import { schema as bookSchema } from "@/books/schema/books.schema"

export const schemaRegistry = {
  song: songSchema,
  movie: movieSchema,
  book: bookSchema,
};