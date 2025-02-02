'use client';

import { useEffect, useState } from 'react';
import { UseStepper } from './useStepper.types';
import { SelectedServices } from '../components/Stepper/Stepper.types';
import { FormConfig } from '../components/Stepper/Stepper';

export interface useStepperProps {
  steps: Record<string, FormConfig>
  selectedService: SelectedServices;
  setSelectedService: React.Dispatch<React.SetStateAction<SelectedServices>>
}

export const useStepper = ({ steps, selectedService, setSelectedService }: useStepperProps): UseStepper => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([]);
  const [submittedSteps, setSubmittedSteps] = useState<boolean[]>([]);
  const [bookingDetails, setBookingDetails] = useState<Record<string, SelectedServices>>({});
  const stepsNames = Object.keys(steps);

  const handleBack = (): void => setCurrentStep((prev) => prev - 1);

  useEffect(() => {
    if (!selectedService) return;

    setBookingDetails((prev) => ({
      ...prev, [currentStep]: selectedService
    }));

  }, [selectedService]);

  const handleReset = (): void => {
    setCurrentStep(0);
    setCompletedSteps([]);
    setSubmittedSteps([]);
    setBookingDetails({});
  };

  const handleComplete = (): void => {
    setBookingDetails((prev) => ({
      ...prev,
      [currentStep]: selectedService || prev[currentStep], 
    }));
    setCompletedSteps((prev) => {
      const newState = [...prev];

      newState[currentStep] = true;

      return newState;
    });
    setSelectedService({});
    handleNext();
  };

  const handleSubmit = (): void => {
    setSubmittedSteps((prev) => {
      const newState = [...prev];

      newState[currentStep] = true;

      return newState;
    });

  };

  const isLastStep = currentStep === stepsNames.length - 1;
  const areAllStepsCompleted = completedSteps.length === stepsNames.length;

  const handleNext = (): void => {
    if (!areAllStepsCompleted) setCurrentStep(prev => prev + 1);
  };

  return {
    stepsNames,
    currentStep,
    isLastStep,
    stepIsSubmitted: submittedSteps,
    stepIsCompleted: completedSteps,
    handleSubmit,
    handleComplete,
    handleNext,
    handleBack,
    handleReset,
    bookingDetails
  };
};