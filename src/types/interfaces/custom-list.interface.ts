import type * as Yup from "yup";
import type { SchemaEntertainment } from "@/types/interfaces/schemas.interface";

export interface CustomListProps<T = string> {
    itemSchema: SchemaEntertainment<T>[];
    itemValidations: Yup.ObjectSchema<Yup.AnyObject>;
    itemLabel: string;
    addLabel: string;
}
