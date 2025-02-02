import { SubmitButton } from '../SubmitButton';
import styles from './ActionBar.module.css';
import { SelectedServices, Translations } from '../Stepper/Stepper.types';
import { formatPriceCurrency } from '@/app/utils/formatPriceCurrency';

export interface ActionBarProps {
  translations: Translations;
  stepIsCompleted: boolean[];
  currentStepIndex: number;
  selectedService: SelectedServices;
  handleComplete: () => void;
  handleNext: () => void;
  handleBack: () => void;
  showServiceInActionBar: boolean  
}

export const ActionBar = ({ currentStepIndex, selectedService, handleComplete, handleNext, stepIsCompleted, handleBack, translations, showServiceInActionBar }: ActionBarProps) => {

  const { next, submit, back } = translations;
  
  return (
    <div className={styles.submitPopUp}>
      <div className={styles.submitButtonContainer}>
        <div className={styles.submitOptions}>
          {showServiceInActionBar &&
            <div className={styles.submitServiceDetails}>
              <div className={styles.submitOrderDetails}>
                <div className={styles.submitServiceDescription}>{selectedService.name}</div>
                <div className={styles.submitServiceSubDescription}>{selectedService.unit}</div>
              </div>
              <div className={styles.submitServicePrice}>{formatPriceCurrency(Number(selectedService.price))}</div>
            </div>
          } 
        </div>
        <SubmitButton title={!stepIsCompleted[currentStepIndex] ? submit : next} onClick={!stepIsCompleted[currentStepIndex] ? handleComplete : handleNext} />
        {currentStepIndex !== 0 && <SubmitButton secondary={true} title={back} onClick={handleBack} />}
      </div>
    </div>
  );
};