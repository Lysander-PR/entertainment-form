import { cleanOptionalInputString } from "@/utils/cleanInputString";
import type { Song } from "@/songs/entities/song.entity";
import type { CreateSongPayload, SongPayload } from "@/songs/types/interfaces/song-payload.interface";
import type { SongResponse } from "@/songs/types/interfaces/song-response.interface";

export const toSong = ({ id, title, composer, guestArtist, genre }: SongResponse): Song => ({
    id,
    title,
    composer,
    guestArtist: guestArtist ?? '',
    genreId: genre?.id ?? ''
});

export const toSongPayload = ({ title, composer, guestArtist, genreId }: Song): SongPayload => ({
    title,
    composer,
    guestArtist: cleanOptionalInputString(guestArtist),
    genreId
});

export const toCreateSongPayload = (song: Song, albumId: string): CreateSongPayload => ({
    ...toSongPayload(song),
    albumId
});
