import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "@/app/components/Select";
import { SelectOptionProps, SelectProps } from "@/app/components/Select/Select.types";
import styles from "@/app/components/Select/Select.module.css"
import { CloseIcon, FacebookIcon, InstagramIcon, MenuIcon } from "@/app/components/icons";

describe("Select", () => {
    const handleSelect = vi.fn();
    const selectOptions: SelectOptionProps[] = [
        {
            value: "value1",
            selected: false,
            title: "Option 1",
            testId: "option1",
            LeftIcon: InstagramIcon,
        },
        {
            value: "value2",
            selected: false,
            title: "Option 2",
            testId: "option2",
            LeftIcon: MenuIcon,
            RightIcon: CloseIcon
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
    beforeEach(() => {
        handleSelect.mockClear()
    })
    it('Renders correctly with provided label', async () => {
        render(<Select {...selectArgs} />);
        const selectComponent = screen.getByTestId(selectArgs.testId!);
        expect(selectComponent).toBeInTheDocument();
        expect(selectComponent).toHaveTextContent(selectArgs.label + ' *');
        const options = screen.getAllByTestId('option')
        await userEvent.click(options[0]);       
        expect(handleSelect).toHaveBeenCalledTimes(1);
        expect(selectComponent).toHaveTextContent(selectOptions[0].title);
        expect(selectComponent).toHaveTextContent(selectArgs.label + ' *');
        expect(selectComponent).toHaveTextContent(selectArgs.helperText!);
    })
    it("Should select correctly option, if in the option property list was given option with 'selected: true'", async () => {
        const selectOptionsClone: SelectOptionProps[] = [...selectOptions,
            {
                value: "value3",
                selected: true,
                title: "Option 3",
                testId: "option2",
                LeftIcon: CloseIcon,
                RightIcon: FacebookIcon
            }
        ];
        const args = {...selectArgs, values:selectOptionsClone}
        render(<Select {...args} />);
        const selectComponent = screen.getByTestId("select-button");
        expect(selectComponent).toHaveTextContent("Option 3");
    })
    it("Should render options correctly", async () => {
        render(<Select {...selectArgs} />);
        const options = screen.getAllByTestId('option')
        expect(options.length).toBe(3);
        expect(options[1]).toHaveTextContent("Option 1")
        expect(options[2]).toHaveTextContent("Option 2")
    })

    it("Should be disabled", async () => {
        const args = { ...selectArgs, disabled: true };
        render(<Select {...args} />);
        const select = screen.getByTestId("select-button");
        await userEvent.click(select);
        expect(handleSelect).toHaveBeenCalledTimes(1);
    });

    it("Should add placeholder like first option", async () => {
        const args = { ...selectArgs, placeholder: "Placeholder text" };
        render(<Select {...args} />);
        const select = screen.getByTestId("option-list");
        const firstOption = select.children[0];
        expect(firstOption).toBeInTheDocument();
        expect(firstOption).toHaveTextContent(args.placeholder);
    });

    it("Should render correctly in not required state", async () => {
        const args = { ...selectArgs, required: false };
        render(<Select {...args} />);
        const labelComponent = screen.getByTestId("select-label");
        expect(labelComponent).toBeInTheDocument();
        expect(labelComponent).toHaveTextContent(args.label);
    });

    it("Should display error message", async () => {
        const args = { ...selectArgs, error: "Invalid selection" };
        render(<Select {...args} />);
        const selectLabel = screen.getByTestId("select-label");
        const selectButton = screen.getByTestId("select-button");
        expect(selectLabel.classList.contains(styles.errorText)).toBe(true);
        expect(selectButton.classList.contains(styles.errorSelectWrapper)).toBe(true);
        expect(screen.queryByText("Invalid selection")).toBeInTheDocument();
    });

    it("Should display error message correctly even if helper text is given", async () => {
        const args = { ...selectArgs, error: "Invalid selection", helperText: "Helper text" };
        render(<Select {...args} />);
        const select = screen.getByTestId(args.testId!);
        expect(select).toHaveTextContent("Invalid selection");
        expect(screen.queryByText("Helper Text")).not.toBeInTheDocument();
    }); // *, helper text
});