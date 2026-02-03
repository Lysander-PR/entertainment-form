import type { SelectProps } from "antd";

export interface CustomSelectProps extends Omit<SelectProps, 'options'> {
  options: NonNullable<SelectProps['options' ]>;
}
