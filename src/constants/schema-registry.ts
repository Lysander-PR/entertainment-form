import { createSchema as songSchema } from "@/songs/schema/songs.schema"
import { createSchema as movieSchema } from "@/movies/schema/movies.schema"
import { createSchema as bookSchema } from "@/books/schema/books.schema"

import type { SongSchemaProps } from '@/songs/schema/songs.schema'

import type { TypeEntertainment } from "@/types/enums/type-entertainment.enum"
import type { SchemaEntertainment } from "@/types/interfaces/schemas.interface"
import type { EntertainmentField } from "@/types/entertainment.type"

type SchemaContextProps = SongSchemaProps
type SchemaFactory = (props?: SchemaContextProps) => SchemaEntertainment<EntertainmentField>[];

export const schemaRegistry: Record<TypeEntertainment, SchemaFactory> = {
  song: (props) => songSchema({
    albumOptions: props?.albumOptions ?? [],
    genreOptions: props?.genreOptions ?? [],
  }),
  movie: movieSchema,
  book: bookSchema,
};