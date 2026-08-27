import { TypeEntertainment } from "@/types/enums/type-entertainment.enum";
import { AlbumTitle } from "@/albums/components/AlbumTitle";
import { MovieTitle } from "@/movies/components/MovieTitle";
import { BookTitle } from "@/books/components/BookTitle";

import { useEntertainmentParams } from "@/hooks/useEntertainmentParams";

export const TitleRenderer = () => {
    const { entertainmentSelected } = useEntertainmentParams();

    switch (entertainmentSelected) {
        case TypeEntertainment.ALBUM:
            return <AlbumTitle />;
        case TypeEntertainment.MOVIE:
            return <MovieTitle />;
        case TypeEntertainment.BOOK:
            return <BookTitle />;
        default:
            return <h2>Unknown Entertainment Type</h2>;
    }
}
