import { FC } from "react";
import { SelectOptionProps } from "./Select.types";

export const SelectOption: FC<SelectOptionProps> = (props: SelectOptionProps) => {
  console.log(props);

  return <option></option>;
};