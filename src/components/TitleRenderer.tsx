import { useSearchParams } from "react-router-dom";

import { TypeEntertainment } from "@/types/enums/type-entertainment.enum";
import { SongTitle } from "@/songs/components/SongTitle";
import { MovieTitle } from "@/movies/components/MovieTitle";
import { BookTitle } from "@/books/components/BookTitle";

export const TitleRenderer = () => {
    const [searchParams] = useSearchParams({ entertainment: TypeEntertainment.SONG });
    const entertainmentSelected: TypeEntertainment = searchParams.get("entertainment") as TypeEntertainment || TypeEntertainment.SONG;

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
