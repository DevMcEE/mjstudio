'use client';

import styles from './Stepper.module.css';
import { useStepper } from '../../hooks/useStepper';
import { Step } from '../Step/Step';
import { useState } from 'react';
import { SelectedServices, StepperProps } from './Stepper.types';
import { ActionBar } from '../ActionBar';
import { ServiceInfoBar } from '../ServiceInfoBar';
import { InfoBarStyle } from '../ServiceInfoBar/ServiceInfoBar';
import { createForms } from './createForms';

export const Stepper = ({ translations, locale, steps }: StepperProps) => {

  const { stepsTranslationsMap } = translations;
  const [selectedService, setSelectedService] = useState<SelectedServices>({});

  const handleResetForm = () => {
    handleReset();
    setSelectedService({});
  };

  const {
    currentStep,
    completedSteps,
    submittedSteps,
    handleComplete,
    handleNext,
    handleSubmit,
    handleReset,
    handleBack,
    isLastStep,
    stepsNames,
    bookingDetails,
  } = useStepper({ steps, selectedService, setSelectedService });

  const forms = createForms({ steps, dependencies: { locale, selectedService, setSelectedService, handleSubmit, handleResetForm } });
  const infoBar = (index: number, variant: InfoBarStyle) => {
    if (!bookingDetails[index]) return null;

    return <ServiceInfoBar selectedService={bookingDetails[index]} variant={variant} />;
  };

  return (
    <div className={styles.stepperMainContainer}>
      {stepsNames.map((step, index) => (
        <Step
          key={step}
          index={index}
          steps={stepsNames}
          currentStep={currentStep}
          form={() => forms[step].component({ locale, selectedService, setSelectedService, handleSubmit, handleResetForm })}
          stepsTranslationsMap={stepsTranslationsMap}
          isLastStep={isLastStep}
          completedSteps={completedSteps}
        >{infoBar(index, "secondary")}</Step>
      ))}
      {submittedSteps[currentStep] && (
        <ActionBar
          currentStepIndex={currentStep}
          selectedService={bookingDetails[currentStep]}
          handleComplete={handleComplete}
          handleNext={handleNext}
          completedSteps={completedSteps}
          translations={translations}
          handleBack={handleBack}
          showServiceInActionBar={forms[stepsNames[currentStep]].showServiceInActionBar}
        >{infoBar(currentStep, "primary")}</ActionBar>
      )}
    </div>
  );
};