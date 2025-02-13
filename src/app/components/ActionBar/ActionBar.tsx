import { SubmitButton } from '../SubmitButton';
import styles from './ActionBar.module.css';
import { SelectedServices, Translations } from '../Stepper/Stepper.types';

export interface ActionBarProps {
  translations: Translations;
  completedSteps: boolean[];
  currentStepIndex: number;
  selectedService: SelectedServices;
  handleComplete: () => void;
  handleNext: () => void;
  handleBack: () => void;
  showServiceInActionBar: boolean;
  children?: JSX.Element | null;
}

export const ActionBar = ({ currentStepIndex, handleComplete, handleNext, completedSteps, handleBack, translations, showServiceInActionBar, children }: ActionBarProps) => {

  const { next, submit, back } = translations;

  return (
    <div className={styles.submitPopUp}>
      <div className={styles.submitButtonContainer}>
        <div className={styles.submitOptions}>
          {showServiceInActionBar && children}
        </div>
        <SubmitButton title={!completedSteps[currentStepIndex] ? submit : next} onClick={!completedSteps[currentStepIndex] ? handleComplete : handleNext} />
        {currentStepIndex !== 0 && <SubmitButton secondary={true} title={back} onClick={handleBack} />}
      </div>
    </div>
  );
};