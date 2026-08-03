import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createMovie, getMovie, updateMovie } from "@/movies/actions/movie.action"
import { TypeEntertainment } from "@/types/enums/type-entertainment.enum"
import type { Movie } from "@/movies/entities/movie.entity"

interface SaveMovieVariables {
    movie: Movie;
    poster?: File;
}

export const useMovie = (id: string) => {
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: [TypeEntertainment.MOVIE, id],
        queryFn: () => getMovie(id),
        staleTime: 1000 * 60 * 2, // * 2 minutes
        enabled: !!id
    })

    const mutation = useMutation({
        mutationFn: ({ movie, poster }: SaveMovieVariables) => {
            if (id) {
                return updateMovie(id, movie, poster);
            }

            return createMovie(movie, poster);
        },
        onSuccess: (movie) => {
            queryClient.invalidateQueries({ queryKey: [TypeEntertainment.MOVIE, id] })
            queryClient.setQueryData([TypeEntertainment.MOVIE, id], movie);
        }
    })

    return {
        query,
        mutation
    };
}
