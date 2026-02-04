import { mockBook } from "@/mocks/book.mock"
import type { BookResponse } from "@/books/types/interfaces/book-response.interface";

export const getBook = (): BookResponse => {
    return mockBook;
}