import { TypeRenderer } from "@/types/enums/type-renderer.enum";
import type { SchemaEntertainment } from "@/types/interfaces/schemas.interface";
import type { SongField } from "@/songs/types/song-field.type";
import type { CustomSelectProps } from "@/types/interfaces/custom-select.interface";

const colProps: SchemaEntertainment<SongField>['colProps'] = {
    xs: 24,
    md: 12,
    lg: 6
}

type SongSchema = SchemaEntertainment<SongField>;

export interface SongSchemaProps {
    genreOptions: CustomSelectProps['options'];
}

export const createSchema = ({ genreOptions }: SongSchemaProps): SongSchema[] => [
    {
        field: 'title',
        label: 'Title',
        type: TypeRenderer.INPUT,
        colProps
    },
    {
        field: 'composer',
        label: 'Composer',
        type: TypeRenderer.INPUT,
        colProps
    },
    {
        field: 'guestArtist',
        label: 'Guest Artist',
        type: TypeRenderer.INPUT,
        colProps
    },
    {
        field: 'genreId',
        label: 'Genre',
        type: TypeRenderer.SELECT,
        colProps,
        selectProps: {
            options: genreOptions,
            showSearch: true,
            optionFilterProp: 'label',
            placeholder: 'Select a genre'
        }
    }
]
