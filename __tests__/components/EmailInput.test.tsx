import { EmailInput, EmailInputProps } from "@/app/components/EmailInput";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, it, vi } from "vitest";

describe("Email Input", () => {
  let onChange = vi.fn();

  let defaultEmailInputProps: EmailInputProps = {
    label: "Email",
    value: "",
    onChange,
    testId: "email-input",
    placeholder: "your@mail.com",
    helperText: "Enter your email",
  };

  it('Should render with helper text', () => {
    render(<EmailInput {...defaultEmailInputProps} />);

    const emailComponent = screen.getByTestId(defaultEmailInputProps.testId!);
    expect(emailComponent).toBeInTheDocument();
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).not.toHaveAttribute('required');
    expect(inputElement).toHaveAccessibleName(defaultEmailInputProps.label);
    expect(within(emailComponent).queryByText(defaultEmailInputProps.helperText!)).toBeInTheDocument();
    const placeholder = screen.queryByPlaceholderText(defaultEmailInputProps.placeholder!);
    expect(placeholder).toBeInTheDocument();
  });

  it('Should render with error text, hiding helper text', () => {
    
    render(<EmailInput {...defaultEmailInputProps} error="Some error happen" />);
    const emailComponent = screen.getByTestId(defaultEmailInputProps.testId!);
    expect(emailComponent).toBeInTheDocument();

    expect(within(emailComponent).queryByText(defaultEmailInputProps.helperText!)).not.toBeInTheDocument();
    expect(within(emailComponent).getByText("Some error happen")).toBeInTheDocument();
  });

  it('Should call onChange on user input', async () => {
    let inputValue = ""
    const onChange = vi.fn((event) => inputValue += event.target.value);
    render(<EmailInput {...defaultEmailInputProps} onChange={onChange} value={inputValue} />);
    const emailComponent = screen.getByRole('textbox');
    expect(emailComponent).toBeInTheDocument();

    await userEvent.type(emailComponent, 'my1@email.com');
    expect(onChange).toHaveBeenCalledTimes(13);
    expect(inputValue).toBe('my1@email.com');
  });

  it('Should not call onChange on user input when it is disabled', async () => {
    let inputValue = "";
    const onChange = vi.fn((event) => inputValue += event.target.value);

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

  it('Should render id and name in input', () => {
    render(<EmailInput {...defaultEmailInputProps} name="email" id="email" />);

    const emailComponent = screen.getByRole('textbox');
    expect(emailComponent).toBeInTheDocument();
    expect(emailComponent).toHaveAttribute("name", "email");
    expect(emailComponent).toHaveAttribute("id", "email");
  });
});