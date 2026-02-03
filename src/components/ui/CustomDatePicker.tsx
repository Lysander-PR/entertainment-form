import { DatePicker } from "antd"
import type { DatePickerProps } from "antd"

export const CustomDatePicker = (datePickerProps: DatePickerProps) => {
  return (
    <DatePicker
        className="w-full"
        format="DD / MM / YYYY"
        {...datePickerProps}
    />
  )
}
