import * as Yup from "yup";
import { alphaWithSpacesRegex } from "@/constants/regular-expressions";
import { cleanInputString, cleanOptionalInputString } from "@/utils/cleanInputString";
import type { MovieField } from "@/movies/types/movie-field.type";

const validations: Partial<Record<MovieField, Yup.AnySchema>> = {
    director: Yup.string()
        .transform(cleanInputString)
        .required("Director is required")
        .matches(alphaWithSpacesRegex, "Director must contain only letters and spaces")
        .max(30, "Director must have max 30 characters"),
    protagonist: Yup.string()
        .transform(cleanInputString)
        .required("Protagonist is required")
        .matches(alphaWithSpacesRegex, "Protagonist must contain only letters and spaces")
        .max(30, "Protagonist must have max 30 characters"),
    writer: Yup.string()
        .transform(cleanInputString)
        .required("Writer is required")
        .matches(alphaWithSpacesRegex, "Writer must contain only letters and spaces")
        .max(30, "Writer must have max 30 characters"),
    studio: Yup.string()
        .transform(cleanInputString)
        .required("Studio is required")
        .max(20, "Studio must have max 20 characters"),
    title: Yup.string()
        .transform(cleanInputString)
        .required("Title is required")
        .max(30, "Title must have max 30 characters"),
    releaseDate: Yup.date()
        .required("Release Date is required"),
    soundtrack: Yup.string()
        .transform(cleanOptionalInputString)
        .url("Soundtrack must be a valid URL")
        .optional(),
    poster: Yup.mixed()
        .optional()
}

export const schemaValidation: Yup.ObjectSchema<Yup.AnyObject> = Yup.object().shape(validations);
