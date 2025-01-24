import { StepIcon } from '../StepIcon';
import styles from './Step.module.css';

interface StepProps {
    steps: string[];
    index: number;
    activeStep: number;
    stepsMap: Record<string, string>;
    isLastStep: boolean;
    form: () => JSX.Element;
    stepIsCompleted: boolean[];
}

export const Step = ({activeStep, steps, stepsMap,index, form, isLastStep, stepIsCompleted }: StepProps) => {
  const step = Object.keys(stepsMap)[index];

  return (
    <div className={`${styles.stepSection} ${index !== activeStep ? styles.inactive : styles.active}`}>
      <div className={styles.stepItem}>
        <span className={styles.stepItemDetails}>
          <div className={styles.stepIcon}>
            <StepIcon number={index + 1} isActive={index === activeStep} isCompleted={stepIsCompleted[index]} />
          </div>
          <span className={styles.stepItemTitle}>{stepsMap[step]}</span>
        </span>
      </div>
      <div className={`${styles.stepFormContainer} ${isLastStep ? styles.lastContainer : ''}`}>
        <div className={styles.mockForm}>{index === activeStep && form()}</div>
      </div>
      {index !== steps.length - 1 && <div className={styles.stepBorder} />}
    </div>
  );
};