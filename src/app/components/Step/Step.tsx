import { StepIcon } from '../StepIcon';
import { SelectedServices } from '../Stepper/Stepper.types';
import styles from './Step.module.css';

interface StepProps {
  steps: string[];
  index: number;
  currentStep: number;
  stepsTranslationsMap: Record<string, string>;
  isLastStep: boolean;
  form: () => JSX.Element;
  stepIsCompleted: boolean[];
  serviceDescription: SelectedServices;
}

export const Step = ({ currentStep, steps, stepsTranslationsMap, index, form, isLastStep, stepIsCompleted, serviceDescription }: StepProps) => {

  const step = Object.keys(stepsTranslationsMap)[index];
  const selectedServiceDescription = (serviceDescription: SelectedServices) => {
    if (!serviceDescription) return;

    return Object.entries(serviceDescription)
      .map(([key, value]) => key === 'price' ? `${value}EUR` : value)
      .join("\u00A0\u00A0\u00A0");
  };

  return (
    <div className={`${styles.stepSection} ${index !== currentStep ? styles.inactive : styles.active}`}>
      <div className={styles.stepItem}>
        <span className={styles.stepItemDetails}>
          <div className={styles.stepIcon}>
            <StepIcon number={index + 1} isActive={index === currentStep} isCompleted={stepIsCompleted[index]} />
          </div>
          <div>
            <span className={styles.stepItemTitle}>{stepsTranslationsMap[step]}</span>
            <span className={styles.stepItemServiceDescription}>{selectedServiceDescription(serviceDescription)}</span>
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