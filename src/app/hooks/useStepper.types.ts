export const step = {
    service: 'service',
    date_time: 'date_time',
    contacts: 'contacts',
    finish: 'finish',
} as const;

export type StepType = typeof step[keyof typeof step];
export type Completed = Record<number, boolean>


export interface UseStepperProps {
    activeStep: number;
    stepIsCompleted: boolean[];
    stepIsSubmitted: boolean[];
    handleSubmit: () => void;
    handleNext: () => void;
    handleBack: () => void;
    handleReset: () => void;
    handleComplete: () => void;
    isLastStep: boolean;
    steps: StepType[];
}
