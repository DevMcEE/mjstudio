import styles from "./page.module.css";
import { DatePicker } from "@/app/components/CalendarWidget/DatePicker";
import { TimeCellsContainer } from "@/app/components/CalendarWidget/TimeCellsContainer";

export default async function BookingPage() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.headingText}>Booking</h1>
      <div className={styles.stepperContainer}>
      </div>
      <div className={styles.serviceDescriptionContainer}>
        <p>Service:</p>
      </div>
      <div className={styles.calendarContainer}>
        <p>Select Date & Time:</p>
        <DatePicker/>
        <TimeCellsContainer API_URL={process.env.API_URL || ""}/>
      </div>
    </div>
  );
}