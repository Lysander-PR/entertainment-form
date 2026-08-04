import type { CoverResponse } from "@/types/interfaces/cover-response.interface";
import type { SongResponse } from "@/songs/types/interfaces/song-response.interface";

export interface AlbumResponse {
    id: string;
    album: string;
    artist: string;
    studio: string;
    releaseDate: string;
    createdAt: string;
    coverId?: string;
    cover?: CoverResponse;
    songs?: SongResponse[];
}
