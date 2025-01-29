'use client';

import styles from './Stepper.module.css';
import { useStepper } from '../../hooks/useStepper';
import { Step } from '../Step/Step';
import { useState } from 'react';
import { SelectedServices, StepperProps } from './Stepper.types';
import { ActionBar } from '../ActionBar';
import { Form, MockForm } from './StepperMockData';

export const Stepper = ({ translations, locale }: StepperProps) => {
  const { stepsTranslationsMap } = translations;
  const [selectedService, setSelectedService] = useState<SelectedServices>({});

  const handleResetForm = () => {
    handleReset();
    setSelectedService({});
  };

  const forms: Record<string, () => JSX.Element> = {
    service: () =>
      MockForm({
        handleSubmit,
        locale,
        selectedService,
        setSelectedService,
      }),
    date_time: () => Form({ handleSubmit, handleResetForm }),
    contacts: () => Form({ handleSubmit, handleResetForm }),
    finish: () => Form({ handleSubmit, handleResetForm }),
  };

  const {
    currentStep,
    stepIsCompleted,
    stepIsSubmitted,
    handleComplete,
    handleNext,
    handleSubmit,
    handleReset,
    handleBack,
    isLastStep,
    stepsNames,
    bookingDetails,
  } = useStepper({ steps: forms, selectedService, setSelectedService });

  return (
    <div className={styles.stepperMainContainer}>
      {stepsNames.map((step, index) => (
        <Step
          key={step}
          index={index}
          steps={stepsNames}
          currentStep={currentStep}
          form={forms[step]}
          stepsTranslationsMap={stepsTranslationsMap}
          isLastStep={isLastStep}
          stepIsCompleted={stepIsCompleted}
          serviceDescription={bookingDetails[index]}
        />
      ))}
      {stepIsSubmitted[currentStep] && (
        <ActionBar
          steps={stepsNames}
          currentStepIndex={currentStep}
          selectedService={selectedService}
          handleComplete={handleComplete}
          handleNext={handleNext}
          stepIsCompleted={stepIsCompleted}
          translations={translations}
          handleBack={handleBack}
        />
      )}
    </div>
  );
};