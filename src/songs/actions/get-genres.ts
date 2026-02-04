import { genresOptions } from "@/mocks/song.mock";
import type { GenreResponse } from "@/songs/types/interfaces/genre-response.interface";

export const getGenres = (): GenreResponse[] => {
    return genresOptions;
}