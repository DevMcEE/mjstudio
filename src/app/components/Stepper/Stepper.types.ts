import { Content } from "@/app/api/route.types";
import { StepType } from "@/app/hooks/useStepper.types";
import { Locale } from "@/i18n/config.types";

export interface Translations {
    stepsTranslationsMap: Record<StepType, string>;    
    next: string;
    submit: string;
    back: string;
}

export interface StepperProps {
    translations: Translations;
    locale: Locale;
}


export interface GetServiceProps {
    content: Content;
    locale: Locale;
    range: number
}

export interface SelectedServicesProps {
    name: string;
    unit: string;
    price: string;
}
