import { DateTime } from "luxon";
import styles from "./DayCell.module.css";

interface DayCellProps {
    cellId: number;
    isSelected: boolean;
    date: DateTime; 
    isCurrentDay: boolean;
    onClick: () => void;
    isUnavailable: boolean;
}

export const DayCell = ({ onClick, cellId, isSelected, date, isCurrentDay, isUnavailable }: DayCellProps) => {
    return (
        <div onClick={!isUnavailable ? onClick : ()=>{}} className={`${styles.cell}${isUnavailable ? ` ${styles.unavailable}` : ( isSelected ? ` ${styles.selected}` : '' )}${isCurrentDay ? ` ${styles.currentDay}` : ''}`}>
            <div className={styles.dayNumber}>{date.day}</div>
            <div className={styles.slicedNameOfDay}>{date.weekdayShort}</div>
        </div>
    )
}