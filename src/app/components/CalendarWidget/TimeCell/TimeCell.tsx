import styles from "./TimeCell.module.css"
import { DateTime } from "luxon"

export interface TimeCellProps {
    time:DateTime
}

export const TimeCell = ({time}: TimeCellProps) => {
    const stringTime: string = time.toFormat("HH:mm");
    return (
        <div className={styles.timeCell}>
            <p>{stringTime}</p>
        </div>
    )
}