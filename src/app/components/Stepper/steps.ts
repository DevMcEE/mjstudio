import { ServiceSelectionForm } from "../ServiceSelectionForm/ServiceSelectionForm";
import { FormStep } from "./Stepper.types";
import { MockForm } from "./StepperMockData";

export const steps: FormStep[] = [
  { name: "service", component: ServiceSelectionForm, showServiceInActionBar: true },
  { name: "date_time", component: MockForm, showServiceInActionBar: false },
  { name: "contacts", component: MockForm, showServiceInActionBar: false },
  { name: "finish", component: MockForm, showServiceInActionBar: false },
];