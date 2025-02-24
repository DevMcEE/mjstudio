import { FC, useMemo } from "react";
import { SelectOptionProps } from "./Select.types";
import styles from "./Select.module.css";

export interface OnSelectOptionProps {
    value: string,
    // title: string
}
interface AdditionalProps {
    onSelectOption: (value: string) => void;
}

export const SelectOption: FC<SelectOptionProps & AdditionalProps>  = ({
  value,
  title,
  selected,
  RightIcon,
  LeftIcon,
  onSelectOption
}) => {
  const classes = useMemo(() => [styles.selectOption, selected && styles.selected].filter(Boolean).join(" ") , [selected]);

  return (
    <button data-testid={"option"} role="option" className={classes} onClick={() =>onSelectOption(value)} key={value}>
      {LeftIcon && <LeftIcon/>}
      <p>{title}</p>  
      {RightIcon && <RightIcon/>}
    </button>
  );
};
