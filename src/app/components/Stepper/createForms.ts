import { CreateFormsParams, FormCollection, FormComponentProps } from "./Stepper.types";

export const createForms = ({steps, dependencies}:CreateFormsParams) => {
  const forms: FormCollection = {};
  
  steps.forEach((step) => {
    forms[step.name] = {
      component: (props: FormComponentProps) => step.component({ ...dependencies, ...props }),
      showServiceInActionBar: step.showServiceInActionBar,
    };
  });
  
  return forms;
};

