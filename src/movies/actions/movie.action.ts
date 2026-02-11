import { movieMock } from "@/mocks/movie.mock"
import type { Movie } from "@/movies/entities/movie.entity";
import type { MovieResponse } from "@/movies/types/interfaces/movie-response.interface";

export const getMovie = async (id: string): Promise<Movie> => {
    const response: MovieResponse = movieMock;

    return {
        director: response.director,
        protagonist: response.protagonist,
        writer: response.writer,
        studio: response.studio,
        releaseDate: response.releaseDate ? new Date(response.releaseDate) : undefined,
        soundtrack: response.soundtrack || '',
        poster: response.poster || ''
    }
}