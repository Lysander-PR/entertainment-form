import { toSong } from "@/songs/mappers/song.mapper";
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
