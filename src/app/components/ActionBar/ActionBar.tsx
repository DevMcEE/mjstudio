import { SubmitButton } from '../SubmitButton';
import styles from './ActionBar.module.css';
import { SelectedServices, Translations } from '../Stepper/Stepper.types';

export interface ActionBarProps {
  translations: Translations;
  stepIsCompleted: boolean[];
  steps: string[];
  currentStepIndex: number;
  selectedService: SelectedServices;
  handleComplete: () => void;
  handleNext: () => void;
  handleBack: () => void;
  stepLabel?: string;
}

export const ActionBar = ({ steps, currentStepIndex, selectedService, handleComplete, handleNext, stepIsCompleted, handleBack, translations, stepLabel='service' }: ActionBarProps) => {

  const { next, submit, back } = translations;
  
  return (
    <div className={styles.submitPopUp}>
      <div className={styles.submitButtonContainer}>
        <div className={styles.submitOptions}>
          {steps[currentStepIndex] === stepLabel &&
            <div className={styles.submitServiceDetails}>
              <div className={styles.submitOrderDetails}>
                <div className={styles.submitServiceDescription}>{selectedService.name}</div>
                <div className={styles.submitServiceSubDescription}>{selectedService.unit}</div>
              </div>
              <div className={styles.submitServicePrice}>{`${selectedService.price} EUR`}</div>
            </div>
          } 
        </div>
        <SubmitButton title={!stepIsCompleted[currentStepIndex] ? submit : next} onClick={!stepIsCompleted[currentStepIndex] ? handleComplete : handleNext} />
        {currentStepIndex !== 0 && <SubmitButton secondary={true} title={back} onClick={handleBack} />}
      </div>
    </div>
  );
};