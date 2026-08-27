import * as Yup from "yup";
import { alphaWithSpacesRegex } from "@/constants/regular-expressions";
import { cleanInputString } from "@/utils/cleanInputString";
import type { AlbumField } from "@/albums/types/album-field.type";

const validations: Partial<Record<AlbumField, Yup.AnySchema>> = {
    album: Yup.string()
        .transform(cleanInputString)
        .required("Album is required")
        .max(100, "Album must have max 100 characters"),
    artist: Yup.string()
        .transform(cleanInputString)
        .required("Artist is required")
        .max(30, "Artist must have max 30 characters"),
    studio: Yup.string()
        .transform(cleanInputString)
        .required("Studio is required")
        .matches(alphaWithSpacesRegex, "Studio must contain only letters and spaces")
        .max(20, "Studio must have max 20 characters"),
    releaseDate: Yup.date()
        .required("Release Date is required"),
    cover: Yup.mixed()
        .optional(),
    songs: Yup.array()
        .min(1, "The album must have at least one song")
        .required("The album must have at least one song")
}

export const schemaValidation: Yup.ObjectSchema<Yup.AnyObject> = Yup.object().shape(validations);
