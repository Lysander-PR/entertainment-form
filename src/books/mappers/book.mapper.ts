import { cleanOptionalInputString } from "@/utils/cleanInputString";
import type { Book } from "@/books/types/entities/book.entity";
import type { BookResponse } from "@/books/types/interfaces/book-response.interface";

export const toBook = ({ id, author, coWriter, publisher, releaseDate, title, cover }: BookResponse): Book => ({
    id,
    author,
    coWriter: coWriter ?? '',
    publisher,
    releaseDate: new Date(releaseDate),
    title,
    coverImage: cover?.file ?? ''
});

export const toFormData = ({ author, coWriter, publisher, releaseDate, title }: Book, cover?: File): FormData => {
    const formData = new FormData();
    const coWriterCleaned = cleanOptionalInputString(coWriter);

    formData.append('author', author);
    formData.append('title', title);
    formData.append('publisher', publisher);
    formData.append('releaseDate', releaseDate.toISOString());

    if (coWriterCleaned) {
        formData.append('coWriter', coWriterCleaned);
    }

    if (cover) {
        formData.append('cover', cover);
    }

    return formData;
}
