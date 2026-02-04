import { useQuery } from "@tanstack/react-query"
import { getMovie } from "@/movies/actions/get-movie"

export const useMovie = (id: string) => {
    return useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovie(id),
        staleTime: 1000 * 60 * 2 // * 2 minutes
    })
}
