import { TypeRenderer } from "@/types/enums/type-renderer.enum";
import type { BookField } from "@/books/types/book-field.type";
import type { SchemaEntertainment } from "@/types/interfaces/schemas.interface";

type BookSchema = SchemaEntertainment<BookField>;
export const schema: BookSchema[] = [
    {
        field: 'author',
        label: 'Author',
        type: TypeRenderer.INPUT,
        colProps: { xs: 24, md: 8 }
    },
    {
        field: 'cowriter',
        label: 'Co-Writer',
        type: TypeRenderer.INPUT,
        colProps: { xs: 24, md: 8 }
    },
    {
        field: 'title',
        label: 'Title',
        type: TypeRenderer.INPUT,
        colProps: { xs: 24, md: 8 }
    },
    {
        field: 'coverImage',
        label: 'Cover Image',
        type: TypeRenderer.DRAGGER,
        colProps: { span: 24 },
        draggerProps: {
            title: 'Click or drag file to this area to upload a cover',
            description: 'The cover image will be used in the book listing and details page (jpg)'
        }
    },
    {
        field: 'releaseDate',
        label: 'Release Date',
        type: TypeRenderer.DATE_PICKER,
        colProps: { xs: 24, md: 12 }
    },
    {
        field: 'publisher',
        label: 'Publisher',
        type: TypeRenderer.INPUT,
        colProps: { xs: 24, md: 12 }
    }
]