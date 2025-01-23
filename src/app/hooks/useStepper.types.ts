export type Completed = Record<number, boolean>

export interface UseStepper {
    activeStep: number;
    stepIsCompleted: boolean[];
    stepIsSubmitted: boolean[];
    handleSubmit: () => void;
    handleNext: () => void;
    handleBack: () => void;
    handleReset: () => void;
    handleComplete: () => void;
    isLastStep: boolean;
}