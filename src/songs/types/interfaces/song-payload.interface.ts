export interface SongPayload {
    title: string;
    composer: string;
    guestArtist?: string;
    genreId: string;
}

export interface CreateSongPayload extends SongPayload {
    albumId: string;
}

export interface SyncSongPayload extends SongPayload {
    id?: string;
}
