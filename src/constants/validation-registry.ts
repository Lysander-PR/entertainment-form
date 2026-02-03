import { schemaValidation as songValidation } from "@/songs/validations/songs.validations"
import { schemaValidation as movieValidation } from "@/movies/validations/movies.validations"
import { schemaValidation as bookValidation } from "@/books/validations/books.validations"

export const validationRegistry = {
  song: songValidation,
  movie: movieValidation,
  book: bookValidation,
};