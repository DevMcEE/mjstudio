"use client";

import { SelectOptionProps, SelectProps } from "@/app/components/Select/Select.types";
import { Select } from "@/app/components/Select";
import { CloseIcon, InstagramIcon } from "@/app/components/icons";
import { useState } from "react";
export default function BookingPage() {
  const [selected, setSelected]= useState<string>("");
  const selectOptions: SelectOptionProps[] = [
    {
      value: "value1",
      selected: false,
      title: "Option 1",
      testId: "option1",
      LeftIcon: CloseIcon,
    },
    {
      value: "value2",
      selected: false,
      title: "Option 2",
      testId: "option2",
      LeftIcon: InstagramIcon
    },
    
    {
      value: "value3",
      selected: false,
      title: "Option 2",
      testId: "option2",
      LeftIcon: InstagramIcon
    }
    ,
    {
      value: "value4",
      selected: false,
      title: "Option 2",
      testId: "option2",
      LeftIcon: InstagramIcon
    }
    ,
    {
      value: "value5",
      selected: false,
      title: "Option 2",
      testId: "option2",
      LeftIcon: InstagramIcon
    }
  ];
  const selectArgs: SelectProps<SelectOptionProps> = {
    label: "Select label",
    value: selected,
    values: selectOptions,
    disabled: false,
    onSelect: (value) => setSelected(value),
    required: true,
    testId: "selectId",
    placeholder:"placeholdertext",
    helperText:"helper text",
  };

  return (
    <div>
      <Select {...selectArgs} />
      <p>{selected}</p>
      <script>
        {`const body = document.getElementsByTagName("body");
        body[0].style.backgroundColor = "white";`}
      </script>
    </div>

  );
}