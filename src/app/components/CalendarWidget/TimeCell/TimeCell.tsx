import { TimeRange } from "../TimeCellsContainer/TimeCellsContainer";
import styles from "./TimeCell.module.css";

export interface TimeCellProps {
    time:TimeRange
    selected: boolean,
    onClick: () => void,
    available: boolean
}

export const TimeCell = ({time, selected, onClick, available}: TimeCellProps) => {
  return (
    <button className={`${styles.button} ${styles.timeCell} ${selected ? styles.selected : ""} ${!available ? styles.unavailable : ""}`} onClick={onClick}>
      <p>{time}</p>
    </button>
  );
};