import { mockBook } from "@/mocks/book.mock"
import type { Book } from "@/books/types/entities/book.entity";
import type { BookResponse } from "@/books/types/interfaces/book-response.interface";

export const getBook = async (id: string): Promise<Book> => {
    const response: BookResponse = mockBook;

    return {
        id,
        author: response.author,
        cowriter: response.cowriter || '',
        coverImage: response.coverImage || '',
        publisher: response.publisher,
        releaseDate: response.releaseDate ? new Date(response.releaseDate) : new Date(),
        title: response.title
    }
}

export const createBook = async (book: Book): Promise<Book> => {
    console.log('Creating book...', book);
    return book;
}

export const updateBook = async (id: string, book: Book): Promise<Book> => {
    console.log(`Updating book with id ${id}...`, book);
    return book;
}
