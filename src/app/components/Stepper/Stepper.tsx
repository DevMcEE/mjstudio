'use client'
import styles from './Stepper.module.css';
import { useStepper } from '../../hooks/useStepper';
import { Step } from '../Step/Step';
import { SubmitButton } from '../SubmitButton';
import { content } from '@/app/api/home-page/data';
import { Locale } from '@/i18n/config.types';
import { Content, Price } from '@/app/api/route.types';
import { useState } from 'react';
import { SelectedServicesProps, StepperProps } from './Stepper.types';
import { StepType } from '@/app/hooks/useStepper.types';
import { ActionBar } from '../ActionBar';



const getServices = (content: Content, locale: Locale, range: number) => {
    let serviceOptinos = [];
    for (let i = 0; i <= range; i++) {
        serviceOptinos[i] = content[locale].services[i]
    }
    return serviceOptinos;
}

const serviceRange = 5;


export const Stepper = ({ translations, locale }: StepperProps) => {
    const { stepsTranslationsMap, next, submit } = translations;

    const {
        steps,
        activeStep,
        stepIsCompleted,
        stepIsSubmitted,
        handleComplete,
        handleNext,
        handleSubmit,
        handleReset,
        handleBack,
        isLastStep,
    } = useStepper();


    //form and mockForm are used to simulate forms and should be replaced with actual forms on later stages of implementation
    //consider removing all of the code belwow up to return statement after implementing actual forms


    const services = getServices(content, locale, serviceRange);
    const seletcedSerivcesDefaultValue: SelectedServicesProps = { name: "", unit: "", price: "" };
    const [selectedService, setSelectedService] = useState<SelectedServicesProps>(seletcedSerivcesDefaultValue)

    const handleSelect = ({name, unit, price}: SelectedServicesProps):void => {
        setSelectedService({ name, unit, price })
        handleSubmit();
    }

    const handleResetForm = () => {
        handleReset();
        setSelectedService(seletcedSerivcesDefaultValue);
    }

    const form = () => (
        <div className={styles.mock}>
            <button onClick={handleSubmit}>CONFIRM</button>
            <button onClick={handleResetForm}>RESET</button>
        </div>
        )

    const mockForm = () => (
        <>
            {services.map((service) => (
                <div key={service.name} className={styles.mockForm}>
                    <div>
                        <span>{service.name}</span>
                    </div>
                    <div>
                        {service.prices.map((price) => (
                            <SubmitButton key={price.unit} title={`${service.name} ${price.unit} - ${price.price} EUR`} colorless={service.name !== selectedService.name || price.price !== selectedService.price} onClick={() => handleSelect({name:service.name, unit:price.unit, price:price.price})} />
                        ))}
                    </div>
                </div>
            ))}
        </>
    )

    const forms: Record<StepType,() => JSX.Element> = {
        ["service"]: mockForm,
        ["date_time"]: form,
        ["contacts"]: form,
        ["finish"]: form
    }

    return (
        <div className={styles.stepperMainContainer}>
            {steps.map((step, index) => (
                <Step key={step} index={index} steps={steps} activeStep={activeStep} form={forms[step]} stepsMap={stepsTranslationsMap} isLastStep={isLastStep} stepIsCompleted={stepIsCompleted} />
            ))}
            {stepIsSubmitted[activeStep] && <ActionBar
                steps={steps}
                activeStep={activeStep}
                selectedService={selectedService}
                handleComplete={handleComplete}
                handleNext={handleNext}
                stepIsCompleted={stepIsCompleted} 
                translations={translations} 
                handleBack={handleBack}
            />}
        </div>
    );
}