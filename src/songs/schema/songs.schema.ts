import { TypeRenderer } from "@/types/enums/type-renderer.enum";
import type { SchemaEntertainment } from "@/types/interfaces/schemas.interface";
import type { SongField } from "@/songs/types/song-field.type";

const colProps: SchemaEntertainment<SongField>['colProps'] = {
    xs: 24,
    md: 12
}

type SongSchema = SchemaEntertainment<SongField>;
export const schema: SongSchema[] = [
    {
        field: 'artist',
        label: 'Artist',
        type: TypeRenderer.INPUT,
        colProps
    },
    {
        field: 'album',
        label: 'Album',
        type: TypeRenderer.SELECT,
        colProps,
        selectProps: {
            options: []
        }
    },
    {
        field: 'composer',
        label: 'Composer',
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
        field: 'genre',
        label: 'Genre',
        type: TypeRenderer.SELECT,
        colProps,
        selectProps: {
            options: []
        }
    },
    {
        field: 'guestArtist',
        label: 'Guest Artist',
        type: TypeRenderer.INPUT,
        colProps
    },
    {
        field: 'coverArt',
        label: 'Cover Art',
        type: TypeRenderer.DRAGGER,
        colProps,
        draggerProps: {
            title: 'Click or drag file to this area to upload and use it as cover art for the song',
            description: 'Support for a single upload (jpg/png)'
        }
    }
]