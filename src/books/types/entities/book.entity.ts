import type { Cover } from "@/types/interfaces/cover.interface";

export interface Book {
    id: string;
    author: string;
    coWriter: string;
    publisher: string;
    releaseDate: Date;
    title: string;
    coverImage?: Cover;
}
