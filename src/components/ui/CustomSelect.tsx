import { Select } from "antd";
import type { CustomSelectProps } from "@/types/interfaces/custom-select.interface";

export const CustomSelect = ({
  options,
  ...selectRest
}: CustomSelectProps) => {
  return (
    <Select
      {...selectRest}
      options={options}
    />
  );
}