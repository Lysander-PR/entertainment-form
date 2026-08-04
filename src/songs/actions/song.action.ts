import { entertainmentApi } from "@/api/entertainment.api";
import { handleApiError } from "@/api/handle-api-error";
import { toCreateSongPayload, toSongPayload } from "@/songs/mappers/song.mapper";
import type { Song } from "@/songs/entities/song.entity";

const ENDPOINT = '/songs';

export const createSong = async (albumId: string, song: Song): Promise<void> => {
    try {
        await entertainmentApi.post(ENDPOINT, toCreateSongPayload(song, albumId));
    } catch (error) {
        return handleApiError(error, `Could not create the song ${song.title}`);
    }
}

export const updateSong = async (id: string, song: Song): Promise<void> => {
    try {
        await entertainmentApi.patch(`${ENDPOINT}/${id}`, toSongPayload(song));
    } catch (error) {
        return handleApiError(error, `Could not update the song ${song.title}`);
    }
}

export const deleteSong = async (id: string): Promise<void> => {
    try {
        await entertainmentApi.delete(`${ENDPOINT}/${id}`);
    } catch (error) {
        return handleApiError(error, `Could not delete the song ${id}`);
    }
}

const hasChanged = (song: Song, likeSong: Song): boolean => {
    return song.title !== likeSong.title
        || song.composer !== likeSong.composer
        || song.guestArtist !== likeSong.guestArtist
        || song.genreId !== likeSong.genreId;
}

export const syncAlbumSongs = async (albumId: string, currentSongs: Song[], songs: Song[]): Promise<void> => {
    const keptIds = new Set(songs.map(({ id }) => id));

    const removedIds = currentSongs
        .map(({ id }) => id)
        .filter((id): id is string => !!id && !keptIds.has(id));

    const saved = songs.map((song) => {
        if (!song.id) {
            return createSong(albumId, song);
        }

        const currentSong = currentSongs.find(({ id }) => id === song.id);

        return currentSong && hasChanged(currentSong, song)
            ? updateSong(song.id, song)
            : Promise.resolve();
    });

    await Promise.all([...removedIds.map(deleteSong), ...saved]);
}
