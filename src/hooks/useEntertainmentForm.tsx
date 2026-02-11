import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { RadioChangeEvent } from 'antd'
import type { UploadFile } from 'antd/es/upload/interface'
import type { UploadChangeParam } from "antd/lib/upload"

import { schemaRegistry } from "@/constants/schema-registry"
import { validationRegistry } from "@/constants/validation-registry"

import { TypeEntertainment } from '@/types/enums/type-entertainment.enum'
import type { EntertainmentField } from "@/types/entertainment.type"

import { useAlbums } from "@/songs/hooks/useAlbums"
import { useGenres } from "@/songs/hooks/useGenres"

interface Props {
    entertainmentSelected: TypeEntertainment;
    artist?: string;
}

export const useEntertainmentForm = ({
    entertainmentSelected,
    artist
}: Props) => {
    const [searchParams, setSearchParams] = useSearchParams({ entertainment: TypeEntertainment.SONG });
    const [fileLists, setFileLists] = useState<UploadFile[]>([]);

    const { data: albumsByArtist } = useAlbums(entertainmentSelected === TypeEntertainment.SONG ? (artist ?? '') : '')
    const { data: musicGenres } = useGenres(entertainmentSelected === TypeEntertainment.SONG)

    const currentValidation = validationRegistry[entertainmentSelected];
    const currentSchema = schemaRegistry[entertainmentSelected]({
        albumOptions: albumsByArtist?.map(album => ({ label: album.title, value: album.id })) ?? [],
        genreOptions: musicGenres?.map(genre => ({ label: genre.description, value: genre.id })) ?? [],
    });

    const handleSubmit = (values: EntertainmentField): void => {
        console.log({ entertainmentSelected, values, fileLists })
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
