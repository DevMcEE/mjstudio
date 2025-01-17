'use client'
import { useStepper } from '../StepperContext/StepperContext';
import styles from './StepperButton.module.css';
import backArrow from '../../../../public/weui_arrow-outlined.svg'
import Image from 'next/image';

export const StepperButton = () => {

    const { handleBack, activeStep } = useStepper();
    
    return (
        <>
            {activeStep > 0 && 
            <div className={styles.stepperButtonContainer}>
                <button className={styles.stepperButton} onClick={handleBack} disabled={activeStep === 0}>
                    <Image className={styles.stepperButtonImage} src={backArrow} alt="backArrow" />
                </button>
            </div>}
        </>
            
    );
}