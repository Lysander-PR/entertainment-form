import { useSearchParams } from "react-router-dom";

import type { EntityType } from "@/types/entertainment.type";
import { SongTitle } from "@/songs/components/SongTitle";
import { MovieTitle } from "@/movies/components/MovieTitle";
import { BookTitle } from "@/books/components/BookTitle";

export const TitleRenderer = () => {
    const [searchParams] = useSearchParams({ entertainment: 'song' });
    const entertainmentSelected: EntityType = searchParams.get("entertainment") as EntityType || 'song';

    switch (entertainmentSelected) {
        case 'song':
            return <SongTitle />;
        case 'movie':
            return <MovieTitle />;
        case 'book':
            return <BookTitle />;
        default:
            return <h2>Unknown Entertainment Type</h2>;
    }
}
