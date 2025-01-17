import { StepIcon } from '../StepIcon';
import styles from './Step.module.css';

interface StepProps {
    index: number;
    activeStep: number;
    stepsList: { [key: string]: string };
    isLastStep: () => boolean;
    form: () => JSX.Element; 
    stepIsCompleted: { [k: number]: any };
    steps: string[];
}

export const Step = ({ index, activeStep, stepsList, form, isLastStep, stepIsCompleted, steps }: StepProps) => {

    return (
        <div className={`${styles.stepSection} ${index !== activeStep ? styles.inactive : styles.active}`}>
            <div className={styles.stepItem}>
                <span className={styles.stepItemDetails}>
                    <div className={styles.stepIcon}>
                        <StepIcon number={index + 1} isActive={index === activeStep} isCompleted={stepIsCompleted[index]} />
                    </div>
                    <span className={styles.stepItemTitle}>{stepsList[steps[index]]}</span>
                </span>
            </div>
            <div className={`${styles.stepFormContainer} ${isLastStep() ? styles.lastContainer : ''}`}>
                <div className={styles.mockForm}>{index === activeStep && form()}</div>
            </div>
            {index !== steps.length - 1 && <div className={styles.stepBorder} />}
        </div>
    )
}