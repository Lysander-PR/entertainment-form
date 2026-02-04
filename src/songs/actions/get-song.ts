import { songMock } from "@/mocks/song.mock";
import type { SongResponse } from "@/songs/types/interfaces/song-response.interface";

export const getSong = (): SongResponse => {
    return songMock
}