import type { Song } from "@/songs/entities/song.entity";

export interface Album {
    id: string;
    album: string;
    artist: string;
    studio: string;
    releaseDate: Date;
    cover: string;
    songs: Song[];
}
