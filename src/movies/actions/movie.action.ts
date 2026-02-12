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

export const createMovie = async (movie: Movie): Promise<Movie> => {
    console.log('Creating movie...', movie);
    return movie;
}

export const updateMovie = async (id: string, movie: Movie): Promise<Movie> => {
    console.log(`Updating movie with id ${id}...`, movie);
    return movie;
}
