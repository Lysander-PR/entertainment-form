import { entertainmentApi } from "@/api/entertainment.api";
import { handleApiError } from "@/api/handle-api-error";
import { toFormData, toMovie } from "@/movies/mappers/movie.mapper";
import type { Movie } from "@/movies/entities/movie.entity";
import type { MovieResponse } from "@/movies/types/interfaces/movie-response.interface";

const ENDPOINT = '/movies';

export const getMovie = async (id: string): Promise<Movie> => {
    try {
        const { data } = await entertainmentApi.get<MovieResponse>(`${ENDPOINT}/${id}`);

        return toMovie(data);
    } catch (error) {
        return handleApiError(error, `Could not load the movie ${id}`);
    }
}

export const createMovie = async (movie: Movie, poster?: File): Promise<Movie> => {
    try {
        const { data } = await entertainmentApi.post<MovieResponse>(ENDPOINT, toFormData(movie, poster));

        return toMovie(data);
    } catch (error) {
        return handleApiError(error, 'Could not create the movie');
    }
}

export const updateMovie = async (id: string, movie: Movie, poster?: File): Promise<Movie> => {
    try {
        const { data } = await entertainmentApi.patch<MovieResponse>(`${ENDPOINT}/${id}`, toFormData(movie, poster));

        return toMovie(data);
    } catch (error) {
        return handleApiError(error, `Could not update the movie ${id}`);
    }
}
