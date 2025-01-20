'use client';
import { useState } from 'react';
import { step, StepType, UseStepperProps } from './useStepper.types';


export const useStepper = (): UseStepperProps => {
    const steps = Object.keys(step) as StepType[];
    const [activeStep, setActiveStep] = useState<number>(0);
    const [stepIsCompleted, setStepIsCompleted] = useState<boolean[]>([]);
    const [stepIsSubmitted, setStepIsSubmitted] = useState<boolean[]>([]);

    const handleBack = (): void => setActiveStep((prev) => prev - 1);

    const handleReset = (): void  => {
        setActiveStep(0);
        setStepIsCompleted([]);
        setStepIsSubmitted([]);
    };

    const handleComplete = (): void  => {
        setStepIsCompleted((prev) => {
            const newState = [...prev];
            newState[activeStep] = true;
            return newState;
        })
        handleNext();
    };

    const handleSubmit = (): void  => {
        setStepIsSubmitted((prev) => {
            const newState = [...prev];
            newState[activeStep] = true;
            return newState;
        });

    }

    const isLastStep = activeStep === steps.length - 1;
    const areAllStepsCompleted = stepIsCompleted.length === steps.length;
    
    const handleNext = (): void => {
        if (isLastStep && !areAllStepsCompleted) {
            setActiveStep(prev => prev + 1);
        } else if (!isLastStep) {
            setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
        }
    };
    

    return {
        activeStep,
        isLastStep,
        stepIsSubmitted,
        steps, 
        stepIsCompleted,
        handleSubmit,
        handleComplete,
        handleNext,
        handleBack,
        handleReset
    }

}
