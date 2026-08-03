import { TypeEntertainment } from "@/types/enums/type-entertainment.enum";
import { SongTitle } from "@/songs/components/SongTitle";
import { MovieTitle } from "@/movies/components/MovieTitle";
import { BookTitle } from "@/books/components/BookTitle";

import { useEntertainmentParams } from "@/hooks/useEntertainmentParams";

export const TitleRenderer = () => {
    const { entertainmentSelected } = useEntertainmentParams();

    switch (entertainmentSelected) {
        case TypeEntertainment.SONG:
            return <SongTitle />;
        case TypeEntertainment.MOVIE:
            return <MovieTitle />;
        case TypeEntertainment.BOOK:
            return <BookTitle />;
        default:
            return <h2>Unknown Entertainment Type</h2>;
    }
}
