import { albums } from "@/mocks/song.mock"
import type { AlbumResponse } from "@/songs/types/interfaces/album-response.interface"

export const getAlbums = (id: string): AlbumResponse[] => {
    return albums
}