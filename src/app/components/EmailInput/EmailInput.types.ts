import { ChangeEvent } from "react";

export interface EmailInputProps {
  label: string;
  value: string;
  onChange: (email: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  testId?: string;
  helperText?: string;
  error?: string;
  placeholder?: string;
}