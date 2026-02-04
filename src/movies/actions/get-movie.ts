import { movieMock } from "@/mocks/movie.mock"
import type { MovieResponse } from "@/movies/types/interfaces/movie-response.interface";

export const getMovie = (): MovieResponse => {
    return movieMock;
}