import type { Book } from "@/books/types/entities/book.entity";
import type { Movie } from "@/movies/entities/movie.entity";
import type { Song } from "@/songs/entities/song.entity";

export interface EntertainmentForm extends
    Omit<Movie, 'releaseDate'>,
    Omit<Song, 'releaseDate'>,
    Omit<Book, 'releaseDate'> 
{
    releaseDate?: Date;
}
