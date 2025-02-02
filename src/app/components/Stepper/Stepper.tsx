'use client';

import styles from './Stepper.module.css';
import { useStepper } from '../../hooks/useStepper';
import { Step } from '../Step/Step';
import { useState } from 'react';
import { SelectedServices, StepperProps } from './Stepper.types';
import { ActionBar } from '../ActionBar';
import { Form, MockForm } from './StepperMockData';

export type FormConfig = {
  component: () => JSX.Element;
  showServiceInActionBar: boolean;
};

export const Stepper = ({ translations, locale }: StepperProps) => {
  const { stepsTranslationsMap } = translations;
  const [selectedService, setSelectedService] = useState<SelectedServices>({});

  const handleResetForm = () => {
    handleReset();
    setSelectedService({});
  };

  const forms: Record<string, FormConfig> = {
    service: {
      component: () =>
        MockForm({
          handleSubmit,
          locale,
          selectedService,
          setSelectedService,
        }),
      showServiceInActionBar: true,
    },
    date_time: {
      component: () => Form({ handleSubmit, handleResetForm }),
      showServiceInActionBar: false,
    },
    contacts: {
      component: () => Form({ handleSubmit, handleResetForm }),
      showServiceInActionBar: false,
    },
    finish: {
      component: () => Form({ handleSubmit, handleResetForm }),
      showServiceInActionBar: false,
    },
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

  console.log(bookingDetails);

  return (
    <div className={styles.stepperMainContainer}>
      {stepsNames.map((step, index) => (
        <Step
          key={step}
          index={index}
          steps={stepsNames}
          currentStep={currentStep}
          form={forms[step].component}
          stepsTranslationsMap={stepsTranslationsMap}
          isLastStep={isLastStep}
          stepIsCompleted={stepIsCompleted}
          serviceDescription={bookingDetails[index]}
        />
      ))}
      {stepIsSubmitted[currentStep] && (
        <ActionBar
          currentStepIndex={currentStep}
          selectedService={bookingDetails[currentStep]}
          handleComplete={handleComplete}
          handleNext={handleNext}
          stepIsCompleted={stepIsCompleted}
          translations={translations}
          handleBack={handleBack}
          showServiceInActionBar={forms[stepsNames[currentStep]].showServiceInActionBar}  
        />
      )}
    </div>
  );
};