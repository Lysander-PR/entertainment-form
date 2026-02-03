import type { SongField } from "@/songs/types/song-field.type";
import type { MovieField } from "@/movies/types/movie-field.type";
import type { BookField } from "@/books/types/book-field.type";

export type EntityType = "song" | "movie" | "book";
export type EntertainmentField = SongField | MovieField | BookField;