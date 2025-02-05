import { DateTime } from "luxon";
import styles from "./DayCell.module.css";

interface DayCellProps {
    isSelected: boolean;
    date: DateTime; 
    isCurrentDay: boolean;
    onClick: () => void;
    isUnavailable: boolean;
}

export const DayCell = ({ onClick, isSelected, date, isCurrentDay, isUnavailable }: DayCellProps) => {
  const classes = `${styles.button} ${styles.cell}${isUnavailable ? ` ${styles.unavailable}` : ( isSelected ? ` ${styles.selected}` : '' )}${isCurrentDay ? ` ${styles.currentDay}` : ''}`;

  return (
    <button onClick={!isUnavailable ? onClick : ()=>{}} className={classes}>
      <div className={styles.dayNumber}>{date.day}</div>
      <div className={styles.slicedNameOfDay}>{date.weekdayShort}</div>
    </button>
  );
};