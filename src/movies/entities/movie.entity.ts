import type { Cover } from "@/types/interfaces/cover.interface";

export interface Movie {
    id: string;
    director: string;
    protagonist: string;
    writer: string;
    studio: string;
    releaseDate: Date;
    soundtrack: string;
    poster?: Cover;
    title: string;
}
