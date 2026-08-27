import { schemaValidation as albumValidation } from "@/albums/validations/albums.validations"
import { schemaValidation as movieValidation } from "@/movies/validations/movies.validations"
import { schemaValidation as bookValidation } from "@/books/validations/books.validations"

export const validationRegistry = {
  album: albumValidation,
  movie: movieValidation,
  book: bookValidation,
};
