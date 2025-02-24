import { TextInput, TextInputProps } from "@/app/components/TextInput";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, it, vi } from "vitest";

describe("Text Input with email type", () => {
  let onChange = vi.fn();

  let defaultTextInputProps: TextInputProps = {
    type: "email",
    label: "Email",
    value: "",
    onChange,
    testId: "email-input",
    placeholder: "your@mail.com",
    helperText: "Enter your email",
  };

  it('Should render with helper text', () => {
    render(<TextInput {...defaultTextInputProps} />);

    const textComponent = screen.getByTestId(defaultTextInputProps.testId!);
    expect(textComponent).toBeInTheDocument();
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).not.toHaveAttribute('required');
    expect(inputElement).toHaveAccessibleName(defaultTextInputProps.label);
    expect(within(textComponent).queryByText(defaultTextInputProps.helperText!)).toBeInTheDocument();
    const placeholder = screen.queryByPlaceholderText(defaultTextInputProps.placeholder!);
    expect(placeholder).toBeInTheDocument();
  });

  it('Should render with error text, hiding helper text', () => {
    
    render(<TextInput {...defaultTextInputProps} error="Some error happen" />);
    const textComponent = screen.getByTestId(defaultTextInputProps.testId!);
    expect(textComponent).toBeInTheDocument();

    expect(within(textComponent).queryByText(defaultTextInputProps.helperText!)).not.toBeInTheDocument();
    expect(within(textComponent).getByText("Some error happen")).toBeInTheDocument();
  });

  it('Should call onChange on user input', async () => {
    let inputValue = ""
    const onChange = vi.fn((event) => inputValue += event.target.value);
    render(<TextInput {...defaultTextInputProps} onChange={onChange} value={inputValue} />);
    const textComponent = screen.getByRole('textbox');
    expect(textComponent).toBeInTheDocument();

    await userEvent.type(textComponent, 'my1@email.com');
    expect(onChange).toHaveBeenCalledTimes(13);
    expect(inputValue).toBe('my1@email.com');
  });

  it('Should not call onChange on user input when it is disabled', async () => {
    let inputValue = "";
    const onChange = vi.fn((event) => inputValue += event.target.value);

    render(<TextInput {...defaultTextInputProps} disabled onChange={onChange} value={inputValue} />);
    const textComponent = screen.getByRole('textbox');
    expect(textComponent).toBeInTheDocument();
    const value = 'someone@email.com';
    await userEvent.type(textComponent, value);
    expect(inputValue).toBe('');
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('Should render and handle required state', () => {
    render(<TextInput {...defaultTextInputProps} required={true} />);

    const textComponent = screen.getByRole('textbox');
    expect(textComponent).toBeInTheDocument();
    expect(textComponent).toHaveAttribute('required');
    expect(textComponent).toHaveAccessibleName('Email *');
  });

  it('Should render id and name in input', () => {
    render(<TextInput {...defaultTextInputProps} name="email" id="email" />);

    const textComponent = screen.getByRole('textbox');
    expect(textComponent).toBeInTheDocument();
    expect(textComponent).toHaveAttribute("name", "email");
    expect(textComponent).toHaveAttribute("id", "email");
  });
});