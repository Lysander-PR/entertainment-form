import { TypeEntertainment } from '@/types/enums/type-entertainment.enum'

import { useBook } from '@/books/hooks/useBook'
import { useMovie } from '@/movies/hooks/useMovie'
import { useSong } from '@/songs/hooks/useSong'

export const useInitialValues = (entertainment: TypeEntertainment, id: string) => {
    const { query: queryBook } = useBook(entertainment === TypeEntertainment.BOOK ? id : '');
    const { query: queryMovie } = useMovie(entertainment === TypeEntertainment.MOVIE ? id : '');
    const { query: querySong } = useSong(entertainment === TypeEntertainment.SONG ? id : '');

    if (entertainment === TypeEntertainment.BOOK) {
        return queryBook;
    }

    if (entertainment === TypeEntertainment.MOVIE) {
        return queryMovie;
    }

    return querySong;
}
