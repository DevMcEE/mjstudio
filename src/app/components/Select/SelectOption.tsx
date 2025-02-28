import { FC, useState, useEffect, useRef } from "react";
import { SelectOptionProps } from "./Select.types";
import styles from "./Select.module.css";
import EventEmitterClient from "@/app/services/EventEmitterClient";

export interface OnSelectOptionProps {
    value: string,
    title: string
}
interface AdditionalProps {
    onSelectOption: ({value, title}: OnSelectOptionProps) => void;
}

export const SelectOption: FC<SelectOptionProps & AdditionalProps>  = ({
  value,
  title,
  selected,
  RightIcon,
  LeftIcon,
  onSelectOption
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(selected);
  const classes = [styles.selectOption, isSelected && styles.selected].filter(Boolean).join(" ");
  const isSelectedRef = useRef<boolean>(isSelected);

  const onClickFunc = () => setIsSelected(true);

  useEffect(()=>{
    EventEmitterClient.on("onSelectOption", (optionValue)=>{
      if(optionValue !== value && isSelectedRef.current)setIsSelected(false);
    });

    return () => EventEmitterClient.unsubscribe("onSelectOption");
  }, []);

  useEffect(()=>{
    if(isSelected) onSelectOption({value, title});
    isSelectedRef.current = isSelected;
  }, [isSelected]);

  return (
    <button data-testid={"option"} className={classes} onClick={onClickFunc} key={value}>
      {LeftIcon && <LeftIcon/>}
      <p>{title}</p>  
      {RightIcon && <RightIcon/>}
    </button>
  );
};
