import { ChangeEvent } from "react";

export interface EmailInputProps {
  label: string;
  value: string;
  onChange: (email: ChangeEvent) => void;
  required?: boolean;
  disabled?: boolean;
  testId?: string;
  helpertext?: string;
  error?: string;
  placeholder?: string;
}