'use client'
import styles from './Stepper.module.css';
import { useStepper } from '../StepperContext/StepperContext';
import { Step } from '../Step/Step';
import { SubmitButton } from '../SubmitButton';
import { content } from '@/app/api/home-page/data';
import { Locale } from '@/i18n/config.types';
import { Content, Price } from '@/app/api/route.types';
import { useState } from 'react';

export interface Translations {
    stepsList: { [key: string]: string };
    next: string;
    submit: string;
}

export interface StepperProps {
    translations: Translations;
    locale: Locale;
}

export const Stepper = ({ translations, locale }: StepperProps) => {
    const { stepsList, next, submit } = translations;

    const {
        activeStep,
        stepIsCompleted,
        stepIsSubmitted,
        steps,
        handleComplete,
        handleNext,
        handleSubmit,
        handleReset,
        isLastStep,
    } = useStepper();


    //form and mockForm are used to simulate forms and should be replaced with actual forms on later stages of implementation
    //consider removing all of the code belwo up to return statement after implementing actual forms

    const serviceRange = 3;


    const getServices = (content: Content, locale: Locale, range: number) => {
        let serviceOptinos = [];
        for (let i = 0; i <= range; i++) {
            serviceOptinos[i] = content[locale].services[i]
        }
        return serviceOptinos;
    }

    const services = getServices(content, locale, serviceRange);
    const [selectedService, setSelectedService] = useState<{name:string, unit:string, price: string}>({name:"",unit:"",price:""})
    const handleSelect = (name:string, unit: string, price: string) => {
        setSelectedService({name,unit,price})
        handleSubmit();
    }

    const handleResetForm = () => {
        handleReset();
        setSelectedService({name:"",unit:"",price:""});
    }

    const form = () => (<div className={styles.mock}>
        <button onClick={handleSubmit}>CONFIRM</button>
        <button onClick={handleResetForm}>RESET</button>
    </div>)

    const mockForm = () => (
        <>
                {services.map((service) => (
                    <div key={service.name} className={styles.mockForm}>
                        <div>
                            <span>{service.name}</span>
                        </div>
                        <div>
                            {service.prices.map((price)=> (
                                <SubmitButton key={price.unit} title={`${service.name} ${price.unit} - ${price.price} EUR`} colorless={service.name !== selectedService.name || price.price !== selectedService.price} onClick={()=>handleSelect(service.name,price.unit,price.price as string)} />
                            ))}
                        </div>
                    </div> 
                ))}
            </>
        )

        

    const forms: { [key: string]: () => JSX.Element } = {
        ["service"]: mockForm,
        ["date_time"]: form,
        ["contacts"]: form,
        ["finish"]: form
    }


    return (
        <div className={styles.stepperMainContainer}>
            {steps.map((step, index) => (
                <Step key={step} index={index} steps={steps} activeStep={activeStep} form={forms[step]} stepsList={stepsList} isLastStep={isLastStep} stepIsCompleted={stepIsCompleted} />
            ))}
            {stepIsSubmitted[activeStep] &&
                <div className={styles.submitPopUp}>
                    <div className={styles.submitButtonContainer}>
                        <div className={styles.submitOptions}>
                            {steps[activeStep] === 'service' &&
                                <div className={styles.submitServiceDetails}>
                                    <div className={styles.submitOrderDetails}>
                                        <div className={styles.submitServiceDescription}>{selectedService.name}</div>
                                        <div className={styles.submitServiceSubDescription}>{selectedService.unit}</div>
                                    </div>
                                    <div className={styles.submitServicePrice}>{`${selectedService.price} EUR`}</div>
                                </div>
                            }
                        </div>
                        {!stepIsCompleted[activeStep]
                            ? (<SubmitButton title={submit} onClick={handleComplete} />)
                            : (<SubmitButton title={next} onClick={handleNext} />)
                        }
                    </div>
                </div>}
        </div>
    );
}