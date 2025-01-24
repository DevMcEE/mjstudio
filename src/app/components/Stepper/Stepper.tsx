'use client';

import styles from './Stepper.module.css';
import { useStepper } from '../../hooks/useStepper';
import { Step } from '../Step/Step';
import { content } from '@/app/api/home-page/data';
import { useState } from 'react';
import { SelectedServices, StepperProps } from './Stepper.types';
import { ActionBar } from '../ActionBar';
import { form, mockForm } from './StepperMockData';

export const Stepper = ({ translations, locale }: StepperProps) => {
  const { stepsTranslationsMap} = translations;
  const selectedServicesDefaultValue: SelectedServices = { name: "", unit: "", price: "" };
  const [selectedService, setSelectedService] = useState<SelectedServices>(selectedServicesDefaultValue);

  const handleResetForm = () => {
    handleReset();
    setSelectedService(selectedServicesDefaultValue);
  };

  const forms: Record<string, () => JSX.Element> = {
    service: () =>
      mockForm({
        handleSubmit,
        locale,
        content,
        selectedService,
        setSelectedService,
      }),
    date_time: () => form({ handleSubmit, handleResetForm }),
    contacts: () => form({ handleSubmit, handleResetForm }),
    finish: () => form({ handleSubmit, handleResetForm }),
  };

  const {
    activeStep,
    stepIsCompleted,
    stepIsSubmitted,
    handleComplete,
    handleNext,
    handleSubmit,
    handleReset,
    handleBack,
    isLastStep,
  } = useStepper({ steps: forms });

  return (
    <div className={styles.stepperMainContainer}>
      {Object.keys(forms).map((step, index) => (
        <Step
          key={step}
          index={index}
          steps={Object.keys(forms)}
          activeStep={activeStep}
          form={forms[step]}
          stepsMap={stepsTranslationsMap}
          isLastStep={isLastStep}
          stepIsCompleted={stepIsCompleted}
        />
      ))}
      {stepIsSubmitted[activeStep] && (
        <ActionBar
          steps={Object.keys(forms)}
          activeStep={activeStep}
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
