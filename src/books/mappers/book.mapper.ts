import { appendCover, toCover } from "@/mappers/cover.mapper";
import { cleanOptionalInputString } from "@/utils/cleanInputString";
import type { Book } from "@/books/types/entities/book.entity";
import type { BookResponse } from "@/books/types/interfaces/book-response.interface";
import type { CoverPayload } from "@/types/interfaces/cover-payload.interface";

export const toBook = ({ id, author, coWriter, publisher, releaseDate, title, cover }: BookResponse): Book => ({
    id,
    author,
    coWriter: coWriter ?? '',
    publisher,
    releaseDate: new Date(releaseDate),
    title,
    coverImage: toCover(cover)
});

export const toFormData = (
    { author, coWriter, publisher, releaseDate, title }: Book,
    cover?: CoverPayload
): FormData => {
    const formData = new FormData();
    const coWriterCleaned = cleanOptionalInputString(coWriter);

    formData.append('author', author);
    formData.append('title', title);
    formData.append('publisher', publisher);
    formData.append('releaseDate', releaseDate.toISOString());

    if (coWriterCleaned) {
        formData.append('coWriter', coWriterCleaned);
    }

    appendCover(formData, cover);

    return formData;
}
