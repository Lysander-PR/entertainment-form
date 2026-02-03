import { Select } from "antd";
import type { SelectProps } from "antd";

type Props = Omit<SelectProps, 'options'> & {
  options: NonNullable<SelectProps['options']>;
};

export const CustomSelect = ({ options, ...rest }: Props) => {
  return (
    <Select
      {...rest}
      options={options}
    />
  );
}
  