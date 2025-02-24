import { FC, useState, useMemo } from "react";
import { SelectOptionProps, SelectProps } from "./Select.types";
import { SelectOption } from "./SelectOption";
import styles from "./Select.module.css";

export const Select: FC<SelectProps<SelectOptionProps>> = ({
  label,
  value,
  values,
  onSelect,
  required,
  placeholder,
  disabled,
  testId,
  helperText,
  error
}) => {
  const [isOptionListHidden, setIsOptionListHidden] = useState<boolean>(true);

  const labelClasses = [styles.selectLabel, required && styles.required, error && styles.errorText].filter(Boolean).join(" ");
  const optionsListClasses = [styles.optionListContainer, isOptionListHidden && styles.hidden].filter(Boolean).join(" ");
  const helperTextClasses = [helperText && styles.helperText, error && styles.hidden].filter(Boolean).join(" ");
  const errorTextClasses = [styles.helperText, error && styles.errorText].filter(Boolean).join(" ");
  const selectButtonClasses = [styles.selectComponent, !isOptionListHidden && styles.revealed, error && styles.errorSelectWrapper].filter(Boolean).join(" ");
  const selectWrapperClasses = [styles.selectWrapper].filter(Boolean).join(" ");

  const onSelectButtonClick = !disabled ? () => setIsOptionListHidden(!isOptionListHidden) : () => {};

  const onSelectOption = (value: string) => {
    setIsOptionListHidden(true);
    onSelect(value);
  };

  const selectId = testId || "select-component";

  const title = useMemo(() => values.find((option) =>option.value === value)?.title, [value, values]);

  return (
    <div data-testid={selectId} className={styles.selectContainer}>
      <p data-testid={"select-label"} className={labelClasses}>{`${label} ${required && "*"}`}</p>
      <div className={selectWrapperClasses}>
        <button data-testid={"select-button"} role="select" className={selectButtonClasses} onClick={onSelectButtonClick}>
          <span>{title}</span>
        </button>
        <div data-testid={"option-list"} className={optionsListClasses}>
          <SelectOption value={""} selected={false} title={placeholder || ""} onSelectOption={onSelect}/>
          { values.map(({ value: optionValue,...optionProps}) => <SelectOption {...optionProps} value ={optionValue}
            selected={value===optionValue} key={optionValue} 
            onSelectOption={onSelectOption} />) }
        </div>
      </div>
      <p className={helperTextClasses}>{helperText}</p>
      <p className={errorTextClasses}>{error}</p>
    </div>
  );
};