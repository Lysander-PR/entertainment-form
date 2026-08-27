import type { AlbumField } from "@/albums/types/album-field.type";
import type { MovieField } from "@/movies/types/movie-field.type";
import type { BookField } from "@/books/types/book-field.type";

export type EntertainmentField = AlbumField | MovieField | BookField;
