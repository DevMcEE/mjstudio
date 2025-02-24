import { FormStep, SelectedServices } from "../components/Stepper/Stepper.types";

export type Completed = Record<number, boolean>

export interface UseStepper {
    currentStep: number;
    completedSteps: boolean[];
    submittedSteps: boolean[];
    handleSubmit: () => void;
    handleNext: () => void;
    handleBack: () => void;
    handleReset: () => void;
    handleComplete: () => void;
    isLastStep: boolean;
    stepsNames: string[];
    bookingDetails: Record<number, SelectedServices>;
}

export interface useStepperProps {
    steps: FormStep[];
    selectedService: SelectedServices;
    setSelectedService: React.Dispatch<React.SetStateAction<SelectedServices>>
}

