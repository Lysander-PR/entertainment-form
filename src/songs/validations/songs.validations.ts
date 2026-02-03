import * as Yup from "yup";
import type { SongField } from "@/songs/types/song-field.type";

const validations: Partial<Record<SongField, Yup.AnySchema>> = {
    artist: Yup.string()
        .required("Artist is required")
        .matches(/^[a-zA-Z0-9\s]+$/, "Artist must contain only letters, numbers, and spaces")
        .min(5, "Artist must have at least 5 characters"),
    guestArtist: Yup.string()
        .matches(/^[a-zA-Z0-9\s]+$/, "Guest Artist must contain only letters, numbers, and spaces")
        .min(5, "Guest Artist must have at least 5 characters"),
    album: Yup.string()
        .required("Album is required")
        .max(100, "Album must have max 100 characters"),
    composer: Yup.string()
        .required("Composer is required")
        .matches(/^[a-zA-Z\s]+$/, "Composer must contain only letters and spaces")
        .max(30, "Composer must have max 30 characters"),
    studio: Yup.string()
        .required("Studio is required"),
    releaseDate: Yup.date(),
    genre: Yup.string(),
    coverArt: Yup.mixed()
}

export const schemaValidation: Yup.ObjectSchema<Yup.AnyObject> = Yup.object().shape(validations);