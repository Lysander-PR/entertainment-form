import { useEffect, useState } from 'react'
import { message, type RadioChangeEvent } from 'antd'
import type { UploadFile } from 'antd/es/upload/interface'
import type { UploadChangeParam } from "antd/lib/upload"
import dayjs from 'dayjs'

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
import { useEntertainmentParams } from '@/hooks/useEntertainmentParams'

interface Props {
    artist?: string;
}

export const useEntertainmentForm = ({ artist }: Props) => {
    const { entertainmentSelected, id, isEditing, changeEntertainment } = useEntertainmentParams();
    const [fileLists, setFileLists] = useState<UploadFile[]>([]);

    const { data: albumsByArtist } = useAlbums(entertainmentSelected === TypeEntertainment.SONG ? (artist ?? '') : '')
    const { data: musicGenres } = useGenres(entertainmentSelected === TypeEntertainment.SONG)

    const { query: queryMovie, mutation: mutationMovie } = useMovie(entertainmentSelected === TypeEntertainment.MOVIE ? id : '');
    const { query: querySong, mutation: mutationSong } = useSong(entertainmentSelected === TypeEntertainment.SONG ? id : '')
    const { query: queryBook, mutation: mutationBook } = useBook(entertainmentSelected === TypeEntertainment.BOOK ? id : '')

    const queryRegistry = {
        [TypeEntertainment.SONG]: querySong,
        [TypeEntertainment.MOVIE]: queryMovie,
        [TypeEntertainment.BOOK]: queryBook
    };

    const {
        data: record,
        isFetching: isLoadingRecord,
        error: recordError
    } = queryRegistry[entertainmentSelected];

    const currentValidation = validationRegistry[entertainmentSelected];
    const currentSchema = schemaRegistry[entertainmentSelected]({
        albumOptions: albumsByArtist?.map(album => ({ label: album.title, value: album.id })) ?? [],
        genreOptions: musicGenres?.map(genre => ({ label: genre.description, value: genre.id })) ?? [],
    });

    useEffect(() => {
        if (!recordError) {
            return;
        }

        message.error(`Failed to load the ${entertainmentSelected}: ${recordError.message}`);
    }, [recordError, entertainmentSelected]);

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
        const poster = fileLists[0]?.originFileObj;

        await mutationMovie.mutateAsync({ movie: values, poster }, {
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
        const cover = fileLists[0]?.originFileObj;

        await mutationBook.mutateAsync({ book: values, cover }, {
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
        const releaseDate = values.releaseDate ? dayjs(values.releaseDate).toDate() : new Date();

        switch (entertainmentSelected) {
            case TypeEntertainment.SONG:
                await saveSong(values);
                break;

            case TypeEntertainment.MOVIE:
                await saveMovie({ ...values, releaseDate });
                break;

            case TypeEntertainment.BOOK:
                await saveBook({ ...values, releaseDate });
                break;

            default:
                break;
        }
    }

    const handleDraggerChange = (info: UploadChangeParam<UploadFile<unknown>>) => {
        setFileLists(info.fileList);
    }

    const handleChangeEntity = (e: RadioChangeEvent) => {
        changeEntertainment(e.target.value);
    }

    return {
        entertainmentSelected,
        isEditing,
        initialValues: record,
        isLoadingRecord,
        schema: currentSchema,
        validations: currentValidation,
        handleSubmit,
        handleDraggerChange,
        handleChangeEntity
    }
}
