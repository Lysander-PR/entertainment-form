import { InputNumber } from "antd"
import type { InputNumberProps } from 'antd'

export const CustomInputNumber = (inputNumberProps: InputNumberProps) => {
  return (
    <InputNumber
      style={{ width: "100%" }}
      stringMode
      formatter={(value) =>
        value ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
      }
      parser={(value) => (value ? value.replace(/,/g, "") : "")}
      {...inputNumberProps}
    />
  )
}
