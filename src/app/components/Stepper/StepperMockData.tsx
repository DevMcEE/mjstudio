'use client';

import styles from './Stepper.module.css';
import { FormComponentProps } from './Stepper.types';
import { TextInput } from '../TextInput/TextInput';
import { ChangeEvent, useState } from 'react';

export const MockForm = ({ handleSubmit, handleResetForm }: FormComponentProps): JSX.Element => {
  const [emailValue, setEmailValue] = useState<string>('');

  const handleEmailInput = (email: ChangeEvent<HTMLInputElement>): void => {
    setEmailValue((email.target).value);
  };

  return (
    <div className={styles.mock}>
      <button onClick={handleSubmit}>CONFIRM</button>
      <button onClick={handleResetForm}>RESET</button>
      <TextInput type="email" testId="email-input" id='emailId' label="Email" helperText="Enter your email" required={true} error={'Some error happen'} placeholder='your@mail.com' value={emailValue} onChange={handleEmailInput} />
      <TextInput type="email" testId="email-input" id='emailId' label="Email" helperText="Enter your email" placeholder='your@mail.com' value={emailValue} onChange={handleEmailInput} />
    </div>
  );
};