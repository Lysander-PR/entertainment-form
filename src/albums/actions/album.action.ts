import { entertainmentApi } from "@/api/entertainment.api";
import { handleApiError } from "@/api/handle-api-error";
import { toAlbum, toCreateFormData, toUpdateFormData } from "@/albums/mappers/album.mapper";
import type { Album } from "@/albums/types/entities/album.entity";
import type { AlbumResponse } from "@/albums/types/interfaces/album-response.interface";
import type { CoverPayload } from "@/types/interfaces/cover-payload.interface";

const ENDPOINT = '/albums';

export const getAlbum = async (id: string): Promise<Album> => {
    try {
        const { data } = await entertainmentApi.get<AlbumResponse>(`${ENDPOINT}/${id}`);

        return toAlbum(data);
    } catch (error) {
        return handleApiError(error, `Could not load the album ${id}`);
    }
}

export const createAlbum = async (album: Album, cover?: CoverPayload): Promise<Album> => {
    try {
        const { data } = await entertainmentApi.post<AlbumResponse>(ENDPOINT, toCreateFormData(album, cover));

        return toAlbum(data);
    } catch (error) {
        return handleApiError(error, 'Could not create the album');
    }
}

export const updateAlbum = async (id: string, album: Album, cover?: CoverPayload): Promise<Album> => {
    try {
        const { data } = await entertainmentApi.patch<AlbumResponse>(
            `${ENDPOINT}/${id}/songs`,
            toUpdateFormData(album, cover)
        );

        return toAlbum(data);
    } catch (error) {
        return handleApiError(error, `Could not update the album ${id}`);
    }
}
