import * as Yup from "yup";
import type { BookField } from "@/books/types/book-field.type";

const minDate = new Date();
const maxDate = new Date(minDate);
maxDate.setMonth(maxDate.getMonth() + 7);

const validations: Partial<Record<BookField, Yup.AnySchema>> = {
    author: Yup.string()
        .required("Author is required")
        .matches(/^[a-zA-Z\s]+$/, "Author must contain only letters and spaces")
        .min(3, "Author must have at least 3 characters")
        .max(50, "Author must have max 50 characters"),
    cowriter: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Co-Writer must contain only letters and spaces")
        .min(3, "Co-Writer must have at least 3 characters")
        .max(50, "Co-Writer must have max 50 characters"),
    publisher: Yup.string()
        .required("Publisher is required")
        .max(100, "Publisher must have max 100 characters"),
    releaseDate: Yup.date()
        .min(minDate, "Release Date cannot be in the past")
        .max(maxDate, "Release Date must be within the next 7 months"),
    title: Yup.string()
        .required("Title is required")
        .max(150, "Title must have max 150 characters")
        .matches(/^[a-zA-Z0-9\s]+$/, "Title must contain only letters, numbers, and spaces"),
    coverImage: Yup.mixed()
        .required("Cover Image is required")
}

export const schemaValidation: Yup.ObjectSchema<Yup.AnyObject> = Yup.object().shape(validations);