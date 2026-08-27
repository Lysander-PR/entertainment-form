import { createSchema as albumSchema } from "@/albums/schema/albums.schema"
import { createSchema as movieSchema } from "@/movies/schema/movies.schema"
import { createSchema as bookSchema } from "@/books/schema/books.schema"

import type { AlbumSchemaProps } from '@/albums/schema/albums.schema'

import type { TypeEntertainment } from "@/types/enums/type-entertainment.enum"
import type { SchemaEntertainment } from "@/types/interfaces/schemas.interface"
import type { EntertainmentField } from "@/types/entertainment.type"

type SchemaContextProps = AlbumSchemaProps
type SchemaFactory = (props?: SchemaContextProps) => SchemaEntertainment<EntertainmentField>[];

export const schemaRegistry: Record<TypeEntertainment, SchemaFactory> = {
  album: (props) => albumSchema({
    genreOptions: props?.genreOptions ?? [],
  }),
  movie: movieSchema,
  book: bookSchema,
};
