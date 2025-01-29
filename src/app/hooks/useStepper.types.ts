import { SelectedServices } from "../components/Stepper/Stepper.types";

export type Completed = Record<number, boolean>

export interface UseStepper {
    currentStep: number;
    stepIsCompleted: boolean[];
    stepIsSubmitted: boolean[];
    handleSubmit: () => void;
    handleNext: () => void;
    handleBack: () => void;
    handleReset: () => void;
    handleComplete: () => void;
    isLastStep: boolean;
    stepsNames: string[];
    bookingDetails: Record<number, SelectedServices>;
}