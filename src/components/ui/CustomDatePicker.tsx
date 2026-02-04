import { DatePicker } from "antd"
import type { DatePickerProps } from "antd"
import dayjs from "dayjs"

export const CustomDatePicker = ({
  value,
  ...datePickerProps
}: DatePickerProps) => {
  let normalizedValue: dayjs.Dayjs | undefined;

  if (value !== null && value !== undefined) {
    if (Array.isArray(value)) {
      value = value[0];
    }

    normalizedValue = dayjs(value);
  }


  return (
    <DatePicker
        className="w-full"
        format="DD / MM / YYYY"
        value={normalizedValue}
        {...datePickerProps}
    />
  )
}
