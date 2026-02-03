import { Input } from "antd"
import type { InputProps } from "antd"

export const CustomInput = (inputProps: InputProps) => {
  return (
    <Input className="w-full" {...inputProps} />
  )
}
