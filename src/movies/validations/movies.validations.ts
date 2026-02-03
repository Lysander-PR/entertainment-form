import * as Yup from "yup";
import type { MovieField } from "@/movies/types/movie-field.type";

const minDate = new Date();
const maxDate = new Date(minDate);
maxDate.setFullYear(maxDate.getFullYear() + 5);

const validations: Partial<Record<MovieField, Yup.AnySchema>> = {
    director: Yup.string()
        .required("Director is required")
        .matches(/^[a-zA-Z\s]+$/, "Director must contain only letters and spaces")
        .max(50, "Director must have max 50 characters"),
    protagonist: Yup.string()
        .required("Protagonist is required")
        .matches(/^[a-zA-Z\s]+$/, "Protagonist must contain only letters and spaces")
        .max(50, "Protagonist must have max 50 characters"),
    writer: Yup.string()
        .required("Writer is required")
        .matches(/^[a-zA-Z\s]+$/, "Writer must contain only letters and spaces"),
    studio: Yup.string()
        .required("Studio is required"),
    releaseDate: Yup.date()
        .min(minDate, "Release Date cannot be in the past")
        .max(maxDate, "Release Date must be within the next 5 years"),
    soundtrack: Yup.string()
        .url("Soundtrack must be a valid URL"),
    title: Yup.string()
        .required("Title is required")
        .max(100, "Title must have max 100 characters"),
    poster: Yup.mixed()
        .required("Poster is required")
}

export const schemaValidation: Yup.ObjectSchema<Yup.AnyObject> = Yup.object().shape(validations);