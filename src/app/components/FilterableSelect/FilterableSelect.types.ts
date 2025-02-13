import { SelectOptionProps, SelectProps } from "../Select/Select.types";
export interface FilterableSelectProps extends SelectProps<SelectOptionProps>{
  placeholder?: string;
}