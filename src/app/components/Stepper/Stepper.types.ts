import { Content } from "@/app/api/route.types";
import { Locale } from "@/i18n/config.types";

export interface Translations {
    stepsTranslationsMap: Record<string, string>;    
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

export interface SelectedServices {
    name: string;
    unit: string;
    price: string;
}
