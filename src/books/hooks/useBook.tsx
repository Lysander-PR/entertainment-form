import { useQuery } from "@tanstack/react-query"
import { getBook } from "@/books/actions/get-book"
import { TypeEntertainment } from "@/types/enums/type-entertainment.enum"

export const useBook = (id: string) => {
    return useQuery({
        queryKey: [TypeEntertainment.BOOK, id],
        queryFn: () => getBook(id),
        staleTime: 1000 * 60 * 2, // * 2 minutes
        enabled: !!id
    })
}
