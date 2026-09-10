import { entertainmentApi } from "@/api/entertainment.api";
import { handleApiError } from "@/api/handle-api-error";
import { toBook, toFormData } from "@/books/mappers/book.mapper";
import type { Book } from "@/books/types/entities/book.entity";
import type { BookResponse } from "@/books/types/interfaces/book-response.interface";
import type { CoverPayload } from "@/types/interfaces/cover-payload.interface";

const ENDPOINT = '/books';

export const getBook = async (id: string): Promise<Book> => {
    try {
        const { data } = await entertainmentApi.get<BookResponse>(`${ENDPOINT}/${id}`);

        return toBook(data);
    } catch (error) {
        return handleApiError(error, `Could not load the book ${id}`);
    }
}

export const createBook = async (book: Book, cover?: CoverPayload): Promise<Book> => {
    try {
        const { data } = await entertainmentApi.post<BookResponse>(ENDPOINT, toFormData(book, cover));

        return toBook(data);
    } catch (error) {
        return handleApiError(error, 'Could not create the book');
    }
}

export const updateBook = async (id: string, book: Book, cover?: CoverPayload): Promise<Book> => {
    try {
        const { data } = await entertainmentApi.patch<BookResponse>(`${ENDPOINT}/${id}`, toFormData(book, cover));

        return toBook(data);
    } catch (error) {
        return handleApiError(error, `Could not update the book ${id}`);
    }
}
