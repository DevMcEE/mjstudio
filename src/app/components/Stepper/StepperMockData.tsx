'use client';

import styles from './Stepper.module.css';
import { FormComponentProps } from './Stepper.types';

export const MockForm = ({ handleSubmit, handleResetForm }: FormComponentProps): JSX.Element => {

  return (
    <div className={styles.mock}>
      <button onClick={handleSubmit}>CONFIRM</button>
      <button onClick={handleResetForm}>RESET</button>
    </div>
  );
};
