import type { Song } from "@/songs/entities/song.entity";
import type { SongResponse } from "@/songs/types/interfaces/song-response.interface";

export const toSong = ({ id, title, composer, guestArtist, genre }: SongResponse): Song => ({
    id,
    title,
    composer,
    guestArtist: guestArtist ?? '',
    genreId: genre?.id ?? ''
});
