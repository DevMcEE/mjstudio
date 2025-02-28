import { FC, useState, useEffect } from "react";
import { SelectOptionProps, SelectProps } from "./Select.types";
import { OnSelectOptionProps, SelectOption } from "./SelectOption";
import styles from "./Select.module.css";
import EventEmitterClient from "@/app/services/EventEmitterClient";

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
  const [selectedOption, setSelectedOption] = useState({value:value, title:""});
  const [isOptionListHidden, setIsOptionListHidden] = useState<boolean>(true);

  const labelClasses = [styles.selectLabel, required && styles.required, error && styles.errorText].filter(Boolean).join(" ");
  const optionsListClasses = [styles.optionListContainer, isOptionListHidden && styles.hidden].filter(Boolean).join(" ");
  const helperTextClasses = [helperText && styles.helperText, error && styles.hidden].filter(Boolean).join(" ");
  const errorTextClasses = [styles.helperText, error && styles.errorText].filter(Boolean).join(" ");
  const selectButtonClasses = [styles.selectComponent, !isOptionListHidden && styles.revealed, error && styles.errorSelectWrapper].filter(Boolean).join(" ");
  const selectWrapperClasses = [styles.selectWrapper].filter(Boolean).join(" ");

  const onSelectButtonClick = !disabled ? () => setIsOptionListHidden(!isOptionListHidden) : () => {};

  const onSelectOption = (props: OnSelectOptionProps) => {
    setSelectedOption(props);
  };

  const selectId = testId || "select-component";

  useEffect(()=>{
    onSelect(selectedOption.value);
    EventEmitterClient.emit("onSelectOption", selectedOption.value);
  }, [selectedOption.value]);

  return (
    <div data-testid={selectId} className={styles.selectContainer}>
      <p data-testid={"select-label"} className={labelClasses}>{`${label} ${required && "*"}`}</p>
      <div className={selectWrapperClasses}>
        <button data-testid={"select-button"} className={selectButtonClasses} onClick={onSelectButtonClick}>
          <span>{selectedOption.title}</span>
        </button>
        <div data-testid={"option-list"} className={optionsListClasses}>
          <SelectOption value={""} selected={false} title={placeholder || ""} onSelectOption={onSelectOption}/>
          { values.map(value => <SelectOption key={value.value} onSelectOption={onSelectOption} {...value}/>) }
        </div>
      </div>
      <p className={helperTextClasses}>{helperText}</p>
      <p className={errorTextClasses}>{error}</p>
    </div>
  );
};