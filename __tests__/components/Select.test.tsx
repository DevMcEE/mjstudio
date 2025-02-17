import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "@/app/components/Select";
import { SelectOptionProps, SelectProps } from "@/app/components/Select/Select.types";
import styles from "@/app/components/Select/Select.module.css"

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
            leftIcon: '🇹🇭',
            rightIcon: '❌'
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
        helperText: "Select an option",

    }

    it('Renders correctly with provided label', async () => {
        render(<Select {...selectArgs} />);
        const selectComponent = screen.getByTestId(selectArgs.testId!);

        console.log(screen.debug())
        expect(selectComponent).toBeInTheDocument();

        expect(selectComponent).toHaveAttribute('required');
        expect(selectComponent).toHaveAccessibleName(selectArgs.label + ' *');
        expect(selectComponent).toHaveValue(selectArgs.value);

        await userEvent.selectOptions(selectComponent, selectOptions[1].value);

        expect(handleSelect).toHaveBeenCalledTimes(1);
        expect(selectComponent).toHaveValue(selectOptions[1].value);
        expect(selectComponent).toHaveAccessibleName(selectArgs.label + ' *');

        const selectedOption = screen.getByRole('option', { selected: true });
        expect(selectedOption).toHaveTextContent(`${selectOptions[1].leftIcon} ${selectOptions[1].title} ${selectOptions[1].rightIcon}`);
        const helperTextElement = screen.getByTestId("helper-text");
        expect(helperTextElement).toHaveTextContent(selectArgs.helperText!);
        expect(helperTextElement).toBeInTheDocument();

    })
    it("Should select correctly option, if in the option property list was given option with 'selected: true'", async () => {
        const selectOptionsClone: SelectOptionProps[] = [...selectOptions,
            {
                value: "value3",
                selected: true,
                title: "Option 2",
                testId: "option2",
                leftIcon: '🇹🇭',
                rightIcon: '❌'
            }
        ];
        const selectedOptionValue = selectOptionsClone.find(opt=>opt.selected)!.value;
        const args = {...selectArgs, values:selectOptionsClone}
        render(<Select {...args} />);
        console.log(screen.debug())
        const selectComponent = screen.getByTestId(selectArgs.testId!);
        expect(selectComponent).toHaveValue(selectedOptionValue);
    })
    it("Should render options correctly", async () => {
        render(<Select {...selectArgs} />);
        let index = -1;
        for (let optionProp of selectArgs.values) {
            index++;
            const option = screen.getAllByRole('option').find(opt => opt.getAttribute('value') === optionProp.value);
            if (!option) throw new Error("The option was expected, but wasn't found in the DOM");
            expect(option).toHaveAttribute("value", selectArgs.values[index].value);
            const text =
                selectArgs.values[index].leftIcon ? `${selectArgs.values[index].leftIcon} ` : ""
                + selectArgs.values[index].title || ""
                + selectArgs.values[index].rightIcon ? ` ${selectArgs.values[index].rightIcon}` : "";
            expect(option).toHaveTextContent(text);
            /*
            if(selectArgs.values[index].selected) expect(option).toHaveAttribute("selected")
    
            React does not support the selected attribute on <option>
            */
        }
    })

    it("Should be disabled", async () => {
        const args = { ...selectArgs, disabled: true };
        render(<Select {...args} />);
        const select = screen.getByRole("combobox");
        expect(select).toHaveAttribute('disabled');
    });

    it("Should add placeholder like first option", async () => {
        const args = { ...selectArgs, placeholder: "Placeholder text" };
        render(<Select {...args} />);
        console.log(screen.debug());
        const select = screen.getByRole('combobox');
        const firstOption = select.children[0];
        expect(firstOption).toBeInTheDocument();
        expect(firstOption).toHaveTextContent(args.placeholder);
    });

    it("Should render correctly in not required state", async () => {
        const args = { ...selectArgs, required: false };
        render(<Select {...args} />);
        console.log(screen.debug());
        const labelComponent = screen.getByTestId("select-label");
        expect(labelComponent).toBeInTheDocument();
        expect(labelComponent).toHaveTextContent(args.label);
    });

    it("Should display error message", async () => {
        const args = { ...selectArgs, error: "Invalid selection" };
        render(<Select {...args} />);
        console.log(screen.debug());
        const selectComponent = screen.getByTestId(args.testId!);
        const errorText = screen.getByTestId("error-text");
        const selectLabel = screen.getByTestId("select-label");
        expect(selectLabel.classList.contains(styles.errorText)).toBe(true);
        expect(selectComponent).toHaveAttribute("aria-invalid", "true");
        expect(selectComponent.classList.contains(styles.errorBorder)).toBe(true);

        expect(errorText).toBeInTheDocument();
        expect(errorText).toHaveTextContent(args.error);
    });

    it("Should display error message correctly even if helper text is given", async () => {
        const args = { ...selectArgs, error: "Invalid selection", helperText: "Helper text" };
        render(<Select {...args} />);
        console.log(screen.debug());
        const errorText = screen.getByTestId("error-text");
        expect(errorText).toBeInTheDocument();
        expect(errorText).toHaveTextContent(args.error);
        expect(errorText.classList.contains(styles.errorText)).toBe(true);
    });
});