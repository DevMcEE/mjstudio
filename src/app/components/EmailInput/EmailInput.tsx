import { FC } from "react";
import { EmailInputProps } from "./EmailInput.types";

export const EmailInput: FC<EmailInputProps> = ({testId, ...props}: EmailInputProps) => {
  return (
    <>
      <input type="email" {...props}  data-testid={testId}/>
      {/* TODO: Implement EmailInput label, helpertext and error */}
    </>
  );
};