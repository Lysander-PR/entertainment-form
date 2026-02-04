import { useQuery } from "@tanstack/react-query"
import { getBook } from "@/books/actions/get-book"

export const useBook = (id: string) => {
    return useQuery({
        queryKey: ['book', id],
        queryFn: () => getBook(id),
        staleTime: 1000 * 60 * 2 // * 2 minutes
    })
}
