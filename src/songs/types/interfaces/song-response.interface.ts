import type { GenreResponse } from "@/genres/types/interfaces/genre-response.interface";

export interface SongResponse {
    id: string;
    title: string;
    composer: string;
    guestArtist?: string;
    genre?: GenreResponse;
}
