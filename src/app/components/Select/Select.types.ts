export interface SelectProps<T extends SelectOptionProps> {
  label: string;
  value: string; // selected value
  values: T[],
  onSelect: (code: string) => void;
  required: boolean;
  disabled: boolean;
  testId?: string;
  helperText?: string;
  error?: string;
}

export interface SelectOptionProps {
  value: string;
  selected: boolean;
  title: string;
  testId?: string;
  leftIcon?: string,
  rightIcon?: string
}