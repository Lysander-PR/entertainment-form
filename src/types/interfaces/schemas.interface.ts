import type { DatePickerProps, InputNumberProps, InputProps } from "antd";
import type { TypeRenderer } from "@/types/enums/type-renderer.enum";
import type { CustomDraggerProps } from "./custom-dragger.interface";
import type { CustomSelectProps } from "./custom-select.interface";

export interface SchemaEntertainment<T> {
    field: T;
    type: TypeRenderer;
    label?: string;
    datePickerProps?: DatePickerProps;
    draggerProps?: CustomDraggerProps;
    inputProps?: InputProps;
    inputNumberProps?: InputNumberProps;
    selectProps?: CustomSelectProps;
}
