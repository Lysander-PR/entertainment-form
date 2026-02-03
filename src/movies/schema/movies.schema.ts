import { TypeRenderer } from "@/types/enums/type-renderer.enum";
import type { SchemaEntertainment } from "@/types/interfaces/schemas.interface";
import type { MovieField } from "@/movies/types/movie-field.type";

const colProps: SchemaEntertainment<MovieField>['colProps'] = {
    xs: 24,
    md: 8
};

type MovieSchema = SchemaEntertainment<MovieField>;
export const schema: MovieSchema[] = [
    {
        field: 'director',
        label: 'Director',
        type: TypeRenderer.INPUT,
        colProps
    },
    {
        field: 'protagonist',
        label: 'Protagonist',
        type: TypeRenderer.INPUT,
        colProps
    },
    {
        field: 'writer',
        label: 'Writer',
        type: TypeRenderer.INPUT,
        colProps
    },
    {
        field: 'studio',
        label: 'Studio',
        type: TypeRenderer.INPUT,
        colProps
    },
    {
        field: 'releaseDate',
        label: 'Release Date',
        type: TypeRenderer.DATE_PICKER,
        colProps
    },
    {
        field: 'soundtrack',
        label: 'Soundtrack',
        type: TypeRenderer.INPUT,
        colProps
    },
    {
        field: 'poster',
        label: 'Poster',
        type: TypeRenderer.DRAGGER,
        colProps: { span: 24 },
        draggerProps: {
            title: 'Click or drag file to this area to upload',
            description: 'Support for a single upload. Strictly prohibit from uploading company data or other band files.'
        }
    },
];