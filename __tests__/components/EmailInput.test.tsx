import { EmailInput } from "@/app/components/EmailInput/EmailInput";
import { EmailInputProps } from "@/app/components/EmailInput/EmailInput.types";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, it, vi } from "vitest";

describe.skip("Email Input", () => {
  let onChange = vi.fn();

  let defaultEmailInputProps: EmailInputProps = {
    label: "Email",
    value: "",
    onChange,
    testId: "email-input",
    placeholder: "your@mail.com",
    helpertext: "Enter your email"
  };

  it('Should render with helper text', () => {
    render(<EmailInput {...defaultEmailInputProps} />);

    const emailComponent = screen.getByTestId(defaultEmailInputProps.testId!);
    expect(emailComponent).toBeInTheDocument();

    expect(emailComponent).not.toHaveAttribute('required');
    expect(emailComponent).toHaveAccessibleName('Email');

    expect(within(emailComponent).getByText(defaultEmailInputProps.helpertext!)).toBeInTheDocument();
    expect(emailComponent).toHaveAccessibleName(defaultEmailInputProps.label);
    const placeholder = screen.queryByPlaceholderText(defaultEmailInputProps.placeholder!);
    expect(placeholder).toBeInTheDocument();
  });

  it('Should render with error text, hiding helper text', () => {
    render(<EmailInput {...defaultEmailInputProps} error="Some error happen" />);

    const emailComponent = screen.getByTestId(defaultEmailInputProps.testId!);
    expect(emailComponent).toBeInTheDocument();

    expect(within(emailComponent).getByText(defaultEmailInputProps.helpertext!)).not.toBeInTheDocument();
    expect(within(emailComponent).getByText(defaultEmailInputProps.error!)).toBeInTheDocument();
    // TODO: Check that component has error styles (classes)
  });

  it('Should call onChange on user input', async () => {
    let inputValue = ""
    const onChange =  vi.fn((event) => inputValue += event.target.value); 
    render(<EmailInput {...defaultEmailInputProps} onChange={onChange} value={inputValue}/>);

    const emailComponent = screen.getByRole('textbox');
    expect(emailComponent).toBeInTheDocument();

    await userEvent.type(emailComponent, 'my1@email.com');
    expect(onChange).toHaveBeenCalledTimes(13);
    expect(inputValue).toBe('my1@email.com');
  });

  it('Should not call onChange on user input when it is disabled', async () => {
    let inputValue = "";
    const onChange =  vi.fn((event) => inputValue += event.target.value); 
    
    render(<EmailInput {...defaultEmailInputProps} disabled onChange={onChange} value={inputValue} />);
    const emailComponent = screen.getByRole('textbox');
    expect(emailComponent).toBeInTheDocument();
    const value = 'someone@email.com';
    await userEvent.type(emailComponent, value);
    expect(inputValue).toBe('');
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('Should render and handle required state', () => {
    render(<EmailInput {...defaultEmailInputProps} required={true} />);
    const emailComponent = screen.getByRole('textbox');
    expect(emailComponent).toBeInTheDocument();
    expect(emailComponent).toHaveAttribute('required');
    expect(emailComponent).toHaveAccessibleName('Email *');
  });
});