import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "@/app/components/Select";
import { SelectOptionProps, SelectProps } from "@/app/components/Select/Select.types";

describe("Select", () => {
  const handleSelect = vi.fn();
  const selectOptions: SelectOptionProps[] = [
    {
      value: "value1",
      selected: false,
      title: "Option 1",
      testId: "option1",
      leftIcon: '🇪🇪',
    },
    {
      value: "value2",
      selected: false,
      title: "Option 2",
      testId: "option2",
      leftIcon: '🇹🇭'
    }
  ];
  const selectArgs: SelectProps<SelectOptionProps> = {
    label: "Select label",
    value: "",
    values: selectOptions,
    disabled: false,
    onSelect: handleSelect,
    required: true,
    testId: "selectId",
    helperText:"Select an option"
  }

  it.skip('Renders correctly with provided label', async () => {
    render(<Select {...selectArgs} />);
    const selectComponent = screen.getByTestId(selectArgs.testId!);

    console.log(screen.debug())
    expect(selectComponent).toBeInTheDocument();
    expect(within(selectComponent).getByText(selectArgs.helperText!)).toBeInTheDocument();
    expect(selectComponent).toHaveAttribute('required', expect.stringContaining('true'));
    expect(selectComponent).toHaveAccessibleName(selectArgs.label + ' *');
    expect(selectComponent).toHaveValue(selectArgs.value);

    await userEvent.selectOptions(selectComponent, selectOptions[1].value);

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(selectComponent).toHaveValue(selectOptions[1].value);
    expect(selectComponent).toHaveAccessibleName(selectArgs.label + ' *');
    
    const selectedOption = screen.getByRole('option', { selected: true });
    expect(selectedOption).toHaveTextContent(`${selectOptions[1].leftIcon} ${selectOptions[1].title}`);
  })
});