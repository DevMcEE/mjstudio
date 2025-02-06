import { FC } from "react";
import { FilterableSelectProps } from "./FilterableSelect.types";
import { Select } from "../Select";

export const FilterableSelect: FC<FilterableSelectProps> = ({
  value,
  values,
  onSelect,
  required,
  helperText,
  error,
  ...rest
}: FilterableSelectProps) => {
  const args = {
    value,
    values,
    onSelect,
    required,
    helperText,
    error,
    ...rest
  };

  // TODO: Implement FilterableSelect
  return (
    <>
      <input type="text" />
      <Select
        {...args}
      />
    </>

  );
};