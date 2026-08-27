import { entertainmentApi } from "@/api/entertainment.api";
import { handleApiError } from "@/api/handle-api-error";
import type { GenreResponse } from "@/genres/types/interfaces/genre-response.interface";

const ENDPOINT = '/genres';

export const getGenres = async (): Promise<GenreResponse[]> => {
    try {
        const { data } = await entertainmentApi.get<GenreResponse[]>(`${ENDPOINT}/all`);

        return data;
    } catch (error) {
        return handleApiError(error, 'Could not load the genres');
    }
}
