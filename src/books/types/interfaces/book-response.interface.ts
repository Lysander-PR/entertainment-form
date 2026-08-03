import type { CoverResponse } from "@/types/interfaces/cover-response.interface";

export interface BookResponse {
    id: string;
    author: string;
    coWriter: string | null;
    title: string;
    releaseDate: string;
    publisher: string;
    createdAt: string;
    coverId: string | null;
    cover?: CoverResponse;
}
