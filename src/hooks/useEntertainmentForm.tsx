import { useEffect, useState } from 'react'
import { message, type RadioChangeEvent } from 'antd'
import type { UploadFile } from 'antd/es/upload/interface'
import type { UploadChangeParam } from "antd/lib/upload"
import dayjs from 'dayjs'

import { schemaRegistry } from "@/constants/schema-registry"
import { validationRegistry } from "@/constants/validation-registry"

import { toUploadFileList } from '@/utils/toUploadFileList'

import { TypeEntertainment } from '@/types/enums/type-entertainment.enum'
import type { Cover } from '@/types/interfaces/cover.interface'
import type { EntertainmentForm } from '@/types/interfaces/entertainment-form'
import type { Album } from '@/albums/types/entities/album.entity'
import type { Movie } from '@/movies/entities/movie.entity'
import type { Book } from '@/books/types/entities/book.entity'

import { useGenres } from "@/genres/hooks/useGenres"
import { useAlbum } from '@/albums/hooks/useAlbum'
import { useMovie } from '@/movies/hooks/useMovie'
import { useBook } from '@/books/hooks/useBook'
import { useEntertainmentParams } from '@/hooks/useEntertainmentParams'

interface CoverSelection {
    recordKey: string;
    files: UploadFile[];
}

export const useEntertainmentForm = () => {
    const { entertainmentSelected, id, isEditing, changeEntertainment } = useEntertainmentParams();
    const [coverSelection, setCoverSelection] = useState<CoverSelection | null>(null);

    const { data: musicGenres } = useGenres(entertainmentSelected === TypeEntertainment.ALBUM)

    const { query: queryMovie, mutation: mutationMovie } = useMovie(entertainmentSelected === TypeEntertainment.MOVIE ? id : '');
    const { query: queryAlbum, mutation: mutationAlbum } = useAlbum(entertainmentSelected === TypeEntertainment.ALBUM ? id : '');
    const { query: queryBook, mutation: mutationBook } = useBook(entertainmentSelected === TypeEntertainment.BOOK ? id : '')

    const queryRegistry = {
        [TypeEntertainment.ALBUM]: queryAlbum,
        [TypeEntertainment.MOVIE]: queryMovie,
        [TypeEntertainment.BOOK]: queryBook
    };

    const coverRegistry: Record<TypeEntertainment, Cover | undefined> = {
        [TypeEntertainment.ALBUM]: queryAlbum.data?.cover,
        [TypeEntertainment.MOVIE]: queryMovie.data?.poster,
        [TypeEntertainment.BOOK]: queryBook.data?.coverImage
    };

    const {
        data: record,
        isFetching: isLoadingRecord,
        error: recordError
    } = queryRegistry[entertainmentSelected];

    const recordKey = `${entertainmentSelected}-${id}`;
    const coverFileList = coverSelection?.recordKey === recordKey
        ? coverSelection.files
        : toUploadFileList(coverRegistry[entertainmentSelected]);

    const currentValidation = validationRegistry[entertainmentSelected];
    const currentSchema = schemaRegistry[entertainmentSelected]({
        genreOptions: musicGenres?.map(genre => ({ label: genre.genre, value: genre.id })) ?? [],
    });

    useEffect(() => {
        if (!recordError) {
            return;
        }

        message.error(`Failed to load the ${entertainmentSelected}: ${recordError.message}`);
    }, [recordError, entertainmentSelected]);

    const saveAlbum = async (values: Album) => {
        const cover = coverFileList[0]?.originFileObj;

        await mutationAlbum.mutateAsync({ album: values, cover }, {
            onSuccess: (data) => {
                message.success(`Album ${data.album} saved successfully!`);
            },
            onError: (error) => {
                let errorMessage = 'Unknown error';
                if (error instanceof Error) {
                    errorMessage = error.message;
                }

                message.error(`Failed to save album: ${errorMessage}`);
            }
        });
    }

    const saveMovie = async (values: Movie) => {
        const poster = coverFileList[0]?.originFileObj;

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
        const cover = coverFileList[0]?.originFileObj;

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
            case TypeEntertainment.ALBUM:
                await saveAlbum({ ...values, releaseDate });
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
        setCoverSelection({ recordKey, files: info.fileList });
    }

    const handleChangeEntity = (e: RadioChangeEvent) => {
        changeEntertainment(e.target.value);
    }

    return {
        entertainmentSelected,
        isEditing,
        initialValues: record,
        isLoadingRecord,
        coverFileList,
        schema: currentSchema,
        validations: currentValidation,
        handleSubmit,
        handleDraggerChange,
        handleChangeEntity
    }
}
