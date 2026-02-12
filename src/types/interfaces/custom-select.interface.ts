import type { SelectProps } from "antd";
import type { DefaultOptionType } from "antd/es/select";

export interface CustomSelectProps extends Omit<SelectProps, 'options'> {
  options: DefaultOptionType[];
}
