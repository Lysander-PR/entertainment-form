import { useQuery } from '@tanstack/react-query'

import { TypeEntertainment } from '@/types/enums/type-entertainment.enum'

import { getSong } from '@/songs/actions/get-song'
import { getBook } from '@/books/actions/get-book'
import { getMovie } from '@/movies/actions/get-movie'
import type { Song } from '@/songs/entities/song.entity'
import type { Book } from '@/books/types/entities/book.entity'
import type { Movie } from '@/movies/entities/movie.entity'

const fetchers: Record<TypeEntertainment, (id: string) => Promise<Book | Movie | Song>> = {
    [TypeEntertainment.SONG]: getSong,
    [TypeEntertainment.BOOK]: getBook,
    [TypeEntertainment.MOVIE]: getMovie,
}

export const useInitialValues = (entertainment: TypeEntertainment, id: string) => {
    const fetcher = fetchers[entertainment]

    return useQuery<Book | Movie | Song>({
        queryKey: [entertainment, id],
        queryFn: () => fetcher(id),
        staleTime: 1000 * 60 * 2, // 2 minutes,
        enabled: !!id
    })
}
