import { StepIcon } from '../StepIcon';
import styles from './Step.module.css';

interface StepProps {
  steps: string[];
  index: number;
  currentStep: number;
  stepsTranslationsMap: Record<string, string>;
  isLastStep: boolean;
  form: () => JSX.Element;
  completedSteps: boolean[];
  children?: JSX.Element | null;
}

export const Step = ({ currentStep, steps, stepsTranslationsMap, index, form, isLastStep, completedSteps, children}: StepProps) => {

  const step = Object.keys(stepsTranslationsMap)[index];

  return (
    <div className={`${styles.stepSection} ${index !== currentStep ? styles.inactive : styles.active}`}>
      <div className={styles.stepItem}>
        <span className={styles.stepItemDetails}>
          <div className={styles.stepIcon}>
            <StepIcon number={index + 1} isActive={index === currentStep} isCompleted={completedSteps[index]} />
          </div>
          <div className={styles.stepItemDescription}>
            <span className={styles.stepItemTitle}>{stepsTranslationsMap[step]}</span>
            {index !== currentStep && children}
          </div>
        </span>
      </div>
      <div className={`${styles.stepFormContainer} ${isLastStep ? styles.lastContainer : ''}`}>
        <div className={styles.mockForm}>{index === currentStep && form()}</div>
      </div>
      {index !== steps.length - 1 && <div className={styles.stepBorder} />}
    </div>
  );
};