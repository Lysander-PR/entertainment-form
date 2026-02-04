import { useQuery } from "@tanstack/react-query"
import { getMovie } from "@/movies/actions/get-movie"
import { TypeEntertainment } from "@/types/enums/type-entertainment.enum"

export const useMovie = (id: string) => {
    return useQuery({
        queryKey: [TypeEntertainment.MOVIE, id],
        queryFn: () => getMovie(id),
        staleTime: 1000 * 60 * 2, // * 2 minutes
        enabled: !!id
    })
}
