"use client"

import { FC, useState } from "react";
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
  const selectId = testId || "select-component";
  const [selectedValue, setSelectedValue] = useState(values.find(opt=>opt.selected)?.value || value);
  return (
    <div className={styles.selectContainer}>
      <label className={`${styles.selectLabel} ${error && styles.errorText}`} htmlFor={selectId} data-testid="select-label">
        {label + `${required ? " *" : ""}`}
      </label>
      <select
        id={selectId}
        data-testid={testId}
        value={selectedValue}
        onChange={(e) => {
            setSelectedValue(e.target.value);
            onSelect(e.target.value);
        }}
        required={required}
        className={`${styles.selectDropdown} ${error ? styles.errorBorder : ""}`}
        disabled={disabled}
        aria-invalid={!!error}
      >
        <option value="">{placeholder || ""}</option>
        {values.map((option) => (
          <SelectOption key={option.value} {...option} />
        ))}
      </select>
      {error || helperText ? <p className={`${styles.helperText} ${error ? styles.errorText : ""}`} data-testid={error ? "error-text" : "helper-text"}>{error || helperText}</p> : ""}
    </div>
  );
};