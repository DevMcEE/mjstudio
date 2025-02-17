import { FC } from "react";
import { SelectOptionProps } from "./Select.types";

export const SelectOption: FC<SelectOptionProps> = ({
  value,
  title,
  selected,
  testId,
  rightIcon,
  leftIcon
}) => {
  return (
    <option value={value} data-testid={testId} selected={selected}>
      {leftIcon} {title} {rightIcon}
    </option>
  );
};
