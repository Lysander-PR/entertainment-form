import { toSong, toSongPayload } from "@/songs/mappers/song.mapper";
import type { Album } from "@/albums/types/entities/album.entity";
import type { AlbumResponse } from "@/albums/types/interfaces/album-response.interface";

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
    cover: cover?.file ?? '',
    songs: songs?.map(toSong) ?? []
});

const appendAlbum = (formData: FormData, { album, artist, studio, releaseDate }: Album): void => {
    formData.append('album', album);
    formData.append('artist', artist);
    formData.append('studio', studio);
    formData.append('releaseDate', releaseDate.toISOString());
}

const appendCover = (formData: FormData, cover?: File): void => {
    if (cover) {
        formData.append('cover', cover);
    }
}

export const toCreateFormData = (album: Album, cover?: File): FormData => {
    const formData = new FormData();

    appendAlbum(formData, album);
    formData.append('songs', JSON.stringify(album.songs.map(toSongPayload)));
    appendCover(formData, cover);

    return formData;
}

export const toUpdateFormData = (album: Album, cover?: File): FormData => {
    const formData = new FormData();

    appendAlbum(formData, album);
    appendCover(formData, cover);

    return formData;
}
