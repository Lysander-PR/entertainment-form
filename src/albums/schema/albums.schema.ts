import { TypeRenderer } from "@/types/enums/type-renderer.enum";
import { createSchema as createSongSchema } from "@/songs/schema/songs.schema";
import { schemaValidation as songValidations } from "@/songs/validations/songs.validations";
import type { AlbumField } from "@/albums/types/album-field.type";
import type { CustomSelectProps } from "@/types/interfaces/custom-select.interface";
import type { SchemaEntertainment } from "@/types/interfaces/schemas.interface";

const colProps: SchemaEntertainment<AlbumField>['colProps'] = {
    xs: 24,
    md: 12,
    lg: 6
};

type AlbumSchema = SchemaEntertainment<AlbumField>;

export interface AlbumSchemaProps {
    genreOptions: CustomSelectProps['options'];
}

export const createSchema = ({ genreOptions }: AlbumSchemaProps): AlbumSchema[] => [
    {
        field: 'album',
        label: 'Album',
        type: TypeRenderer.INPUT,
        colProps
    },
    {
        field: 'artist',
        label: 'Artist',
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
        field: 'cover',
        label: 'Cover',
        type: TypeRenderer.DRAGGER,
        colProps: { span: 24 },
        draggerProps: {
            title: 'Click or drag file to this area to upload a cover',
            description: 'The cover will be used in the album listing and details page (jpg or png)',
            accept: 'image/png, image/jpeg, image/jpg'
        }
    },
    {
        field: 'songs',
        label: 'Songs',
        type: TypeRenderer.LIST,
        colProps: { span: 24 },
        listProps: {
            itemSchema: createSongSchema({ genreOptions }),
            itemValidations: songValidations,
            itemLabel: 'Song',
            addLabel: 'Add song'
        }
    }
];
