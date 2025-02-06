import { FC } from "react";
import { SelectOptionProps, SelectProps } from "./Select.types";

export const Select: FC<SelectProps<SelectOptionProps>> = ({
  testId
}: SelectProps<SelectOptionProps>) => {
  return (
    <select data-testid={testId} >
      <option value=""></option>
      {
        //TODO: Add options handling 
      }
    </select>
  );
};