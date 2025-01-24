'use client';

import { useState } from 'react';
import { UseStepper } from './useStepper.types';

export interface useStepperProps {
    steps: Record<string, ()=> JSX.Element>
}

export const useStepper = ({ steps }: useStepperProps): UseStepper => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([]);
  const [submittedSteps, setSubmittedSteps] = useState<boolean[]>([]);

  const handleBack = (): void => setActiveStep((prev) => prev - 1);

  const handleReset = (): void  => {
    setActiveStep(0);
    setCompletedSteps([]);
    setSubmittedSteps([]);
  };

  const handleComplete = (): void  => {
    setCompletedSteps((prev) => {
      const newState = [...prev];

      newState[activeStep] = true;

      return newState;
    });
    handleNext();
  };

  const handleSubmit = (): void  => {
    setSubmittedSteps((prev) => {
      const newState = [...prev];

      newState[activeStep] = true;

      return newState;
    });

  };

  const isLastStep = activeStep === Object.keys(steps).length - 1;
  const areAllStepsCompleted = completedSteps.length === Object.keys(steps).length;
    
  const handleNext = (): void => {
    if (!areAllStepsCompleted) setActiveStep(prev => prev + 1);
  };

  return {
    activeStep,
    isLastStep,
    stepIsSubmitted: submittedSteps,
    stepIsCompleted: completedSteps,
    handleSubmit,
    handleComplete,
    handleNext,
    handleBack,
    handleReset
  };
};