'use client';
import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface StepperContextProps {
    activeStep: number;
    setActiveStep: (step: number) => void;
    stepIsCompleted: { [k: number]: any };
    setStepIsCompleted: (completed: { [k: number]: boolean }) => void;
    stepIsSubmitted: { [k: number]: any };
    setStepIsSubmitted: (completed: { [k: number]: boolean }) => void;
    handleSubmit: () => void;
    handleNext: () => void;
    handleBack: () => void;
    handleReset: () => void;
    handleComplete: () => void;
    isLastStep: () => boolean;
    steps: string[];
}

const steps = ['service', 'date_time', 'contacts', 'finish'];

const StepperContext = createContext<StepperContextProps | undefined>(undefined);

export const StepperProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [stepIsCompleted, setStepIsCompleted] = useState<{ [k: number]: boolean; }>({});
    const [stepIsSubmitted, setStepIsSubmitted] = useState<{ [k: number]: boolean; }>({});

    const handleBack = () => setActiveStep((prev) => prev - 1);

    const handleReset = () => {
        setActiveStep(0);
        setStepIsCompleted({});
        setStepIsSubmitted({});
    };


    const completedSteps = () => Object.keys(stepIsCompleted).length;

    const isLastStep = () => activeStep === steps.length - 1;

    const allStepsCompleted = () => completedSteps() === steps.length;

    const handleComplete = () => {
        setStepIsCompleted({
            ...stepIsCompleted,
            [activeStep]: true,
        });
        handleNext();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((_step, i) => !(i in stepIsCompleted))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };


    // const handleStep = (step: number) => () => {
    //     setActiveStep(step);
    // };

    const handleSubmit = () => {
        setStepIsSubmitted({
            ...stepIsSubmitted,
            [activeStep]: true,
        });

    }

    return (
        <StepperContext.Provider
            value={{ activeStep, setActiveStep, isLastStep, stepIsSubmitted: stepIsSubmitted, steps, setStepIsSubmitted, stepIsCompleted: stepIsCompleted, handleSubmit, handleComplete, setStepIsCompleted, handleNext, handleBack, handleReset }}
        >
            {children}
        </StepperContext.Provider>
    );
    
};

export const useStepper = () => {
    const context = useContext(StepperContext);
    if (!context) {
        throw new Error('useStepper must be used within a StepperProvider');
    }
    return context;
};
