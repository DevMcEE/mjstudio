import { SubmitButton } from '../SubmitButton';
import styles from './ActionBar.module.css';
import { StepType } from '@/app/hooks/useStepper.types';
import { SelectedServicesProps, Translations } from '../Stepper/Stepper.types';
import { StepperBackButton } from '../StepperButton';

export interface ActionBarProps {
    translations: Translations;
    stepIsCompleted: boolean[];
    steps: StepType[];
    activeStep: number;
    selectedService: SelectedServicesProps;
    handleComplete: () => void;
    handleNext: () => void;
    handleBack: () => void;
}

export const ActionBar = ({steps, activeStep, selectedService, handleComplete, handleNext, stepIsCompleted, handleBack, translations}: ActionBarProps) => {

   const {next, submit, back} = translations;
    
    return (
        <div className={styles.submitPopUp}>
        <div className={styles.submitButtonContainer}>
            <div className={styles.submitOptions}>
                {steps[activeStep] === 'service' &&
                    <div className={styles.submitServiceDetails}>
                        <div className={styles.submitOrderDetails}>
                            <div className={styles.submitServiceDescription}>{selectedService.name}</div>
                            <div className={styles.submitServiceSubDescription}>{selectedService.unit}</div>
                        </div>
                        <div className={styles.submitServicePrice}>{`${selectedService.price} EUR`}</div>
                    </div>
                }
            </div>
            {!stepIsCompleted[activeStep]
                ? (<SubmitButton title={submit} onClick={handleComplete} />)
                : (<SubmitButton title={next} onClick={handleNext} />)
            }
            {activeStep > 0 && <SubmitButton title={back} onClick={handleBack} />}
        </div>
    </div>
    );
};

// 

