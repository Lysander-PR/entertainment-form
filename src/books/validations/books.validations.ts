import * as Yup from "yup";
import { alphaWithSpacesRegex } from "@/constants/regular-expressions";
import { cleanInputString, cleanOptionalInputString } from "@/utils/cleanInputString";
import type { BookField } from "@/books/types/book-field.type";

const validations: Partial<Record<BookField, Yup.AnySchema>> = {
    author: Yup.string()
        .transform(cleanInputString)
        .required("Author is required")
        .matches(alphaWithSpacesRegex, "Author must contain only letters and spaces")
        .max(30, "Author must have max 30 characters"),
    coWriter: Yup.string()
        .transform(cleanOptionalInputString)
        .matches(alphaWithSpacesRegex, "Co-Writer must contain only letters and spaces")
        .max(30, "Co-Writer must have max 30 characters")
        .optional(),
    title: Yup.string()
        .transform(cleanInputString)
        .required("Title is required")
        .max(50, "Title must have max 50 characters"),
    releaseDate: Yup.date()
        .required("Release Date is required"),
    publisher: Yup.string()
        .transform(cleanInputString)
        .required("Publisher is required")
        .max(50, "Publisher must have max 50 characters"),
    coverImage: Yup.mixed()
        .optional()
}

export const schemaValidation: Yup.ObjectSchema<Yup.AnyObject> = Yup.object().shape(validations);
