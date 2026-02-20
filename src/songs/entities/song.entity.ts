export interface Song {
    id: string;
    title: string;
    artist: string;
    guestArtist: string;
    album: string;
    composer: string;
    studio: string;
    releaseDate?: Date;
    genre: string;
    coverArt: string;
}