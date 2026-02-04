import { mockBook } from "@/mocks/book.mock"
import type { Book } from "@/books/types/entities/book.entity";
import type { BookResponse } from "@/books/types/interfaces/book-response.interface";

export const getBook = async (): Promise<Book> => {
    const response: BookResponse = mockBook;

    return {
        author: response.author,
        cowriter: response.cowriter || '',
        coverImage: response.coverImage || '',
        publisher: response.publisher,
        releaseDate: response.releaseDate ? new Date(response.releaseDate) : new Date(),
        title: response.title
    }
}