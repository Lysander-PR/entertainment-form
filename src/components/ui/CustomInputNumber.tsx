import { InputNumber } from "antd"
import type { InputNumberProps } from 'antd'

export const CustomInputNumber = (inputNumberProps: InputNumberProps) => {
  return (
    <InputNumber
      style={{ width: "100%" }}
      stringMode
      {...inputNumberProps}
    />
  )
}
