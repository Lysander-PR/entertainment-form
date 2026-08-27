import * as Yup from "yup";
import { alphaWithSpacesRegex } from "@/constants/regular-expressions";
import { cleanInputString, cleanOptionalInputString } from "@/utils/cleanInputString";
import type { SongField } from "@/songs/types/song-field.type";

const validations: Partial<Record<SongField, Yup.AnySchema>> = {
    title: Yup.string()
        .transform(cleanInputString)
        .required("Title is required")
        .max(50, "Title must have max 50 characters"),
    composer: Yup.string()
        .transform(cleanInputString)
        .required("Composer is required")
        .matches(alphaWithSpacesRegex, "Composer must contain only letters and spaces")
        .max(30, "Composer must have max 30 characters"),
    guestArtist: Yup.string()
        .transform(cleanOptionalInputString)
        .matches(alphaWithSpacesRegex, "Guest Artist must contain only letters and spaces")
        .max(30, "Guest Artist must have max 30 characters")
        .optional(),
    genreId: Yup.string()
        .required("Genre is required")
}

export const schemaValidation: Yup.ObjectSchema<Yup.AnyObject> = Yup.object().shape(validations);
