import type { Book } from "@/books/types/entities/book.entity";
import type { Movie } from "@/movies/entities/movie.entity";
import type { Song } from "@/songs/entities/song.entity";

export interface Entertainment {
    movie?: Movie;
    song?: Song;
    book?: Book;
}