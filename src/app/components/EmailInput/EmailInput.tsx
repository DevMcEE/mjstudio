import { FC } from "react";
import { EmailInputProps } from "./EmailInput.types";
import styles from "./EmailInput.module.css";

export const EmailInput: FC<EmailInputProps> = ({ ...props }) => {

  const { testId, required, label, value, error, helperText, placeholder, disabled, onChange } = props;

  return (
    <div
      className={styles.emailInput}
      data-testid={testId}
    >
      <label
        className={`${!!error ? styles.emailInputLabelError : ""} ${styles.emailInputLabel}`}
        htmlFor={`${testId}`}>
        {label}
        {required && <span className={`${!!error ? styles.requiredError : ""} ${styles.required}`} aria-hidden={required}> *</span>}
      </label>
      <div className={styles.emailInputContainer}>
        <input
          id={testId}
          aria-label={required ? `${label} *` : label}
          aria-describedby={error ? `${testId}-error` : `${testId}-helper`}
          aria-invalid={!!error}
          disabled={disabled}
          required={required}
          className={`${!!error ? styles.emailInputFieldError : ""} ${styles.emailInputField}`}
          type="email"
          onChange={onChange}
          value={value}
          placeholder={placeholder} />
        <div className={styles.emailInputMessageContainer}>  
          {error && <span className={styles.emailInputErrorText}  id={`${testId}-error`}>{error}</span>}
          {!error && helperText && <span className={styles.emailInputHelperText} id={`${testId}-helper`}>{helperText}</span>}
        </div>
      </div> 
    </div>
  );
};