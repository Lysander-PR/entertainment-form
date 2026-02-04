export interface SongResponse {
    title: string;
    artist: string;
    guestArtist?: string;
    album: string;
    composer: string;
    studio: string;
    releaseDate?: number;
    genre?: string;
    coverArt?: string;
}