import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { message, type RadioChangeEvent } from 'antd'
import type { UploadFile } from 'antd/es/upload/interface'
import type { UploadChangeParam } from "antd/lib/upload"

import { schemaRegistry } from "@/constants/schema-registry"
import { validationRegistry } from "@/constants/validation-registry"

import { TypeEntertainment } from '@/types/enums/type-entertainment.enum'
import type { EntertainmentForm } from '@/types/interfaces/entertainment-form'
import type { Song } from '@/songs/entities/song.entity'
import type { Movie } from '@/movies/entities/movie.entity'
import type { Book } from '@/books/types/entities/book.entity'

import { useAlbums } from "@/songs/hooks/useAlbums"
import { useGenres } from "@/songs/hooks/useGenres"
import { useMovie } from '@/movies/hooks/useMovie'
import { useSong } from '@/songs/hooks/useSong'
import { useBook } from '@/books/hooks/useBook'

interface Props {
    entertainmentSelected: TypeEntertainment;
    id: string;
    artist?: string;
}

export const useEntertainmentForm = ({
    entertainmentSelected,
    id,
    artist
}: Props) => {
    const [searchParams, setSearchParams] = useSearchParams({ entertainment: TypeEntertainment.SONG });
    const [fileLists, setFileLists] = useState<UploadFile[]>([]);

    const { data: albumsByArtist } = useAlbums(entertainmentSelected === TypeEntertainment.SONG ? (artist ?? '') : '')
    const { data: musicGenres } = useGenres(entertainmentSelected === TypeEntertainment.SONG)

    const { mutation: mutationMovie } = useMovie(id);
    const { mutation: mutationSong } = useSong(id)
    const { mutation: mutationBook } = useBook(id)

    const currentValidation = validationRegistry[entertainmentSelected];
    const currentSchema = schemaRegistry[entertainmentSelected]({
        albumOptions: albumsByArtist?.map(album => ({ label: album.title, value: album.id })) ?? [],
        genreOptions: musicGenres?.map(genre => ({ label: genre.description, value: genre.id })) ?? [],
    });

    const saveSong = async (values: Song) => {
        await mutationSong.mutateAsync(values, {
            onSuccess: (data) => {
                message.success(`Song ${data.title} saved successfully!`);
            },
            onError: (error) => {
                let errorMessage = 'Unknown error';
                if (error instanceof Error) {
                    errorMessage = error.message;
                }

                message.error(`Failed to save song: ${errorMessage}`);
            }
        });
    }

    const saveMovie = async (values: Movie) => {
        await mutationMovie.mutateAsync(values, {
            onSuccess: (data) => {
                message.success(`Movie ${data.title} saved successfully!`);
            },
            onError: (error) => {
                let errorMessage = 'Unknown error';
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                message.error(`Failed to save movie: ${errorMessage}`);
            }
        });
    }

    const saveBook = async (values: Book) => {
        await mutationBook.mutateAsync(values, {
            onSuccess: (data) => {
                message.success(`Book ${data.title} saved successfully!`);
            },
            onError: (error) => {
                let errorMessage = 'Unknown error';
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                message.error(`Failed to save book: ${errorMessage}`);
            }
        })
    }

    const handleSubmit = async (values: EntertainmentForm): Promise<void> => {
        switch (entertainmentSelected) {
            case TypeEntertainment.SONG:
                await saveSong(values);
                break;

            case TypeEntertainment.MOVIE:
                await saveMovie(values);
                break;

            case TypeEntertainment.BOOK:
                await saveBook({
                    ...values,
                    releaseDate: values.releaseDate ? new Date(values.releaseDate) : new Date()
                });
                break;

            default:
                break;
        }

        if (fileLists.length > 0) {
            console.log('Uploading files', fileLists);
        }
    }

    const handleDraggerChange = (info: UploadChangeParam<UploadFile<unknown>>) => {
        setFileLists(info.fileList);
    }

    const handleChangeEntity = (e: RadioChangeEvent) => {
        searchParams.set("entertainment", e.target.value);
        setSearchParams(searchParams);
    }

    return {
        schema: currentSchema,
        validations: currentValidation,
        handleSubmit,
        handleDraggerChange,
        handleChangeEntity
    }
}
