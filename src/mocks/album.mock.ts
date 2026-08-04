import { genresMock } from "@/mocks/genre.mock";
import type { AlbumResponse } from "@/albums/types/interfaces/album-response.interface";

const [pop, rock] = genresMock;
const electronic = genresMock.find(({ genre }) => genre === 'Electronic') ?? pop;

export const albumMock: AlbumResponse = {
  id: "56b20c3e-c1e0-4d3a-9d7f-978e03825b70",
  album: "Random Access Memories",
  artist: "Daft Punk",
  studio: "Columbia",
  releaseDate: "2013-05-17",
  createdAt: "2026-07-28T15:04:12.000Z",
  coverId: "5d89a0fa-fb6d-4e65-ae09-111c6b334b7f",
  cover: {
    id: "5d89a0fa-fb6d-4e65-ae09-111c6b334b7f",
    file: "https://example.com/assets/covers/random-access-memories.jpg",
    createdAt: "2026-07-28T15:04:12.000Z"
  },
  songs: [
    {
      id: "8c1f5f2e-4b7a-4c9d-9f31-2a6e0d4b8c11",
      title: "Get Lucky",
      composer: "Thomas Bangalter",
      guestArtist: "Pharrell Williams",
      genre: electronic
    },
    {
      id: "9d2a6a3f-5c8b-4dae-8042-3b7f1e5c9d22",
      title: "Instant Crush",
      composer: "Guy Manuel de Homem Christo",
      guestArtist: "Julian Casablancas",
      genre: pop
    },
    {
      id: "ae3b7b40-6d9c-4ebf-9153-4c8a2f6dae33",
      title: "Doin It Right",
      composer: "Thomas Bangalter",
      genre: rock
    }
  ]
};
