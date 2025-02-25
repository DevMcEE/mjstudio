import { FC } from "react";
import { TextInputProps } from "./TextInput.types";
import styles from "./TextInput.module.css";

export const TextInput: FC<TextInputProps> = ({ testId, type, required, label, value, error, helperText, placeholder, disabled, onChange, id, name}) => {

  return (
    <div
      className={styles.textInput}
      data-testid={testId}
    >
      <label
        className={`${!!error ? styles.textInputLabelError : ""} ${styles.textInputLabel}`}
        htmlFor={id}>
        {label}
        {required && <span className={`${!!error ? styles.requiredError : ""} ${styles.required}`}> *</span>}
      </label>
      <div className={styles.textInputContainer}>
        <input
          type={type}
          name={name}
          id={id}
          aria-label={required ? `${label} *` : label}
          aria-describedby={error ? `${id}-error` : `${id}-helper`}
          aria-invalid={!!error}
          disabled={disabled}
          required={required}
          className={`${!!error ? styles.textInputFieldError : ""} ${styles.textInputField}`}
          onChange={onChange}
          value={value}
          placeholder={placeholder} />
        <div className={styles.textInputMessageContainer}>  
          {error && <span className={styles.textInputErrorText}  id={`${id}-error`}>{error}</span>}
          {!error && helperText && <span className={styles.textInputHelperText} id={`${id}-helper`}>{helperText}</span>}
        </div>
      </div> 
    </div>
  );
};