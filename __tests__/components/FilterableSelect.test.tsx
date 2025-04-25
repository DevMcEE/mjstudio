import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SelectOptionProps, SelectProps } from "@/app/components/Select/Select.types";
import { FilterableSelect } from "@/app/components/FilterableSelect";

describe("FilterableSelect", () => {
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
    label: "Filterable Select label",
    value: "",
    values: selectOptions,
    disabled: false,
    onSelect: handleSelect,
    required: true,
    testId: "filterableSelectId",
    helperText:"Select an option"
  }

  it.skip('Filters options', async () => {
    render(<FilterableSelect {...selectArgs} />);
    const selectComponent = screen.getByTestId(selectArgs.testId!);

    console.log(screen.debug())
    expect(selectComponent).toBeInTheDocument();

    let options = screen.getAllByRole('option');
    expect(options).toHaveLength(2);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, '2');

    options = screen.getAllByRole('option');
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent(`${selectOptions[1].leftIcon} ${selectOptions[1].title}`);
    
    await userEvent.clear(input);
    options = screen.getAllByRole('option');
    expect(options).toHaveLength(2);
  })
});