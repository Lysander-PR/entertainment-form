import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createBook, getBook, updateBook } from "@/books/actions/book.action"
import { TypeEntertainment } from "@/types/enums/type-entertainment.enum"
import type { Book } from "@/books/types/entities/book.entity";

interface SaveBookVariables {
    book: Book;
    cover?: File;
}

export const useBook = (id: string) => {
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: [TypeEntertainment.BOOK, id],
        queryFn: () => getBook(id),
        staleTime: 1000 * 60 * 2, // * 2 minutes
        enabled: !!id
    })

    const mutation = useMutation({
        mutationFn: ({ book, cover }: SaveBookVariables) => {
            if (id) {
                return updateBook(id, book, cover);
            }

            return createBook(book, cover);
        },
        onSuccess: (book) => {
            queryClient.setQueryData([TypeEntertainment.BOOK, book.id], book);
            queryClient.invalidateQueries({ queryKey: [TypeEntertainment.BOOK, book.id] })
        }
    })

    return {
        query,
        mutation
    };
}
