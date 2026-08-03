import { albumMock } from "@/mocks/album.mock";
import { toAlbum } from "@/albums/mappers/album.mapper";
import type { Album } from "@/albums/types/entities/album.entity";

export const getAlbum = async (id: string): Promise<Album> => {
    console.log(`Getting album with id ${id}...`);

    return toAlbum({ ...albumMock, id });
}

export const createAlbum = async (album: Album, cover?: File): Promise<Album> => {
    console.log('Creating album...', { album, cover });

    return { ...album, id: albumMock.id };
}

export const updateAlbum = async (id: string, album: Album, cover?: File): Promise<Album> => {
    console.log(`Updating album with id ${id}...`, { album, cover });

    return { ...album, id };
}
