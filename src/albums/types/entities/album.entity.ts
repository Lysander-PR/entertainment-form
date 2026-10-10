import type { Song } from "@/songs/entities/song.entity";
import type { Cover } from "@/types/interfaces/cover.interface";

export interface Album {
    id: string;
    album: string;
    artist: string;
    studio: string;
    releaseDate: Date;
    cover?: Cover;
    songs: Song[];
}
