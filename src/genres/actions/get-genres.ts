import { genresMock } from "@/mocks/genre.mock";
import type { GenreResponse } from "@/genres/types/interfaces/genre-response.interface";

export const getGenres = async (): Promise<GenreResponse[]> => {
    return genresMock;
}
