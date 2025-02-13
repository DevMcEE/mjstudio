import { PageLocaleData } from "@/app/api/route.types";
import { Locale } from "@/i18n/config.types";

export interface Translations {
    stepsTranslationsMap: Record<string, string>;    
    next: string;
    submit: string;
    back: string;
}

export interface StepperProps {
    steps: FormStep[];
    translations: Translations;
    locale: Locale;
}

export interface GetServiceProps {
    data: PageLocaleData;
    locale: Locale;
    range: number
}

export interface SelectedServices {
    name?: string;
    unit?: string;
    price?: string;
    date?: string;
    time?: string;
}

export type FormComponentProps = {
    locale?: Locale;
    selectedService?: SelectedServices;
    setSelectedService?: React.Dispatch<React.SetStateAction<SelectedServices>>;
    handleSubmit: () => void;
    handleResetForm?: () => void;
  };
  
export type FormConfig = {
    component: (props:FormComponentProps) => JSX.Element;
    showServiceInActionBar: boolean;
  };
  
export type FormStep = FormConfig & {
      name: string;
    };
  
export type FormCollection = Record<string, FormConfig>;
  
export interface CreateFormsParams {
    steps: FormStep[];
    dependencies?: FormComponentProps;
  }