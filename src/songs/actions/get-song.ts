import { songMock } from "@/mocks/song.mock";
import type { Song } from "@/songs/entities/song.entity";
import type { SongResponse } from "@/songs/types/interfaces/song-response.interface";

export const getSong = async (): Promise<Song> => {
    const response: SongResponse = songMock;

    return {
        album: response.album,
        artist: response.artist,
        composer: response.composer,
        coverArt: response.coverArt || '',
        genre: response.genre || '',
        guestArtist: response.guestArtist || '',
        releaseDate: response?.releaseDate ? new Date(response.releaseDate) : undefined,
        studio: response.studio,
        title: response.title
    }
}