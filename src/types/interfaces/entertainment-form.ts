import type { Album } from "@/albums/types/entities/album.entity";
import type { Book } from "@/books/types/entities/book.entity";
import type { Movie } from "@/movies/entities/movie.entity";

export interface EntertainmentForm extends
    Omit<Movie, 'releaseDate'>,
    Omit<Album, 'releaseDate'>,
    Omit<Book, 'releaseDate'>
{
    releaseDate?: Date;
}
