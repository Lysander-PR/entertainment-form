import { TypeRenderer } from "@/types/enums/type-renderer.enum";
import type { SchemaEntertainment } from "@/types/interfaces/schemas.interface";
import type { MovieField } from "@/movies/types/movie-field.type";

type MovieSchema = SchemaEntertainment<MovieField>;
export const schema: MovieSchema[] = [
    {
        field: 'director',
        label: 'Director',
        type: TypeRenderer.INPUT
    },
    {
        field: 'protagonist',
        label: 'Protagonist',
        type: TypeRenderer.INPUT
    },
    {
        field: 'writer',
        label: 'Writer',
        type: TypeRenderer.INPUT
    },
    {
        field: 'studio',
        label: 'Studio',
        type: TypeRenderer.INPUT
    },
    {
        field: 'releaseDate',
        label: 'Release Date',
        type: TypeRenderer.DATE_PICKER
    },
    {
        field: 'soundtrack',
        label: 'Soundtrack',
        type: TypeRenderer.INPUT
    },
    {
        field: 'poster',
        label: 'Poster',
        type: TypeRenderer.DRAGGER,
        draggerProps: {
            title: 'Click or drag file to this area to upload',
            description: 'Support for a single upload. Strictly prohibit from uploading company data or other band files.'
        }
    },
];