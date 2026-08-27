import type { CoverResponse } from "@/types/interfaces/cover-response.interface";

export interface MovieResponse {
    id: string;
    director: string;
    title: string;
    writer: string;
    studio: string;
    protagonist: string;
    releaseDate: string;
    soundtrack?: string;
    createdAt: string;
    posterId?: string;
    poster?: CoverResponse;
}
