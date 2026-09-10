import { appendCover, toCover } from "@/mappers/cover.mapper";
import { cleanOptionalInputString } from "@/utils/cleanInputString";
import type { CoverPayload } from "@/types/interfaces/cover-payload.interface";
import type { Movie } from "@/movies/entities/movie.entity";
import type { MovieResponse } from "@/movies/types/interfaces/movie-response.interface";

export const toMovie = ({
    id,
    director,
    protagonist,
    writer,
    studio,
    releaseDate,
    soundtrack,
    title,
    poster
}: MovieResponse): Movie => ({
    id,
    director,
    protagonist,
    writer,
    studio,
    releaseDate: new Date(releaseDate),
    soundtrack: soundtrack ?? '',
    title,
    poster: toCover(poster)
});

export const toFormData = ({
    director,
    protagonist,
    writer,
    studio,
    releaseDate,
    soundtrack,
    title
}: Movie, poster?: CoverPayload): FormData => {
    const formData = new FormData();
    const soundtrackCleaned = cleanOptionalInputString(soundtrack);

    formData.append('director', director);
    formData.append('title', title);
    formData.append('writer', writer);
    formData.append('studio', studio);
    formData.append('protagonist', protagonist);
    formData.append('releaseDate', releaseDate.toISOString());

    if (soundtrackCleaned) {
        formData.append('soundtrack', soundtrackCleaned);
    }

    appendCover(formData, poster);

    return formData;
}
