import { SubmitButton } from '../SubmitButton';
import styles from './ActionBar.module.css';
import { SelectedServices, Translations } from '../Stepper/Stepper.types';

export interface ActionBarProps {
    translations: Translations;
    stepIsCompleted: boolean[];
    steps: string[];
    activeStep: number;
    selectedService: SelectedServices;
    handleComplete: () => void;
    handleNext: () => void;
    handleBack: () => void;
}

export const ActionBar = ({ steps, activeStep, selectedService, handleComplete, handleNext, stepIsCompleted, handleBack, translations }: ActionBarProps) => {

    const { next, submit, back } = translations;

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
                <SubmitButton title={!stepIsCompleted[activeStep] ? submit : next} onClick={!stepIsCompleted[activeStep] ? handleComplete : handleNext} />
                {activeStep !== 0 && <SubmitButton secondary={true} title={back} onClick={handleBack} />}

            </div>
        </div>
    );
};