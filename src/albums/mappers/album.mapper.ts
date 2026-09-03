import { toCover } from "@/mappers/cover.mapper";
import { toSong, toSongPayload, toSyncSongPayload } from "@/songs/mappers/song.mapper";
import type { Album } from "@/albums/types/entities/album.entity";
import type { AlbumResponse } from "@/albums/types/interfaces/album-response.interface";
import type { Song } from "@/songs/entities/song.entity";
import type { SongPayload, SyncSongPayload } from "@/songs/types/interfaces/song-payload.interface";

export const toAlbum = ({
    id,
    album,
    artist,
    studio,
    releaseDate,
    cover,
    songs
}: AlbumResponse): Album => ({
    id,
    album,
    artist,
    studio,
    releaseDate: new Date(releaseDate),
    cover: toCover(cover),
    songs: songs?.map(toSong) ?? []
});

const appendAlbum = (formData: FormData, { album, artist, studio, releaseDate }: Album): void => {
    formData.append('album', album);
    formData.append('artist', artist);
    formData.append('studio', studio);
    formData.append('releaseDate', releaseDate.toISOString());
}

const appendSongs = (formData: FormData, songs: (SongPayload | SyncSongPayload)[]): void => {
    formData.append('songs', JSON.stringify(songs));
}

const appendCover = (formData: FormData, cover?: File): void => {
    if (cover) {
        formData.append('cover', cover);
    }
}

const toFormData = (album: Album, toPayload: (song: Song) => SongPayload | SyncSongPayload, cover?: File): FormData => {
    const formData = new FormData();

    appendAlbum(formData, album);
    appendSongs(formData, album.songs.map(toPayload));
    appendCover(formData, cover);

    return formData;
}

export const toCreateFormData = (album: Album, cover?: File): FormData =>
    toFormData(album, toSongPayload, cover);

export const toUpdateFormData = (album: Album, cover?: File): FormData =>
    toFormData(album, toSyncSongPayload, cover);
