import styles from "./TimeCell.module.css"
import { DateTime } from "luxon"

export interface TimeCellProps {
    time:DateTime
    selected: boolean,
    onClick: () => void
}

export const TimeCell = ({time, selected, onClick}: TimeCellProps) => {
    const stringTime: string = time.toFormat("HH:mm");
    return (
        <div className={`${styles.timeCell} ${selected ? styles.selected : ""}`} onClick={onClick}>
            <p>{stringTime}</p>
        </div>
    )
}