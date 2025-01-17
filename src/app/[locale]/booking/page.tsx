import styles from "./page.module.css";
import { DatePicker } from "@/app/components/CalendarWidget/DatePicker";
import { exportTimeData } from "@/app/api/booking-page/route.types";
import { Route } from "@/app/api/route.types";
import { TimeCellsContainer } from "@/app/components/CalendarWidget/TimeCellsContainer";
export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
    let timeData = {} as exportTimeData;
    try{
        timeData = await fetch(`${process.env.API_URL}/${Route.bookingPageWorkingTime}`).then((res)=>res.json());
    }
    catch(error){
        console.error(error);
    }

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
                <TimeCellsContainer timeData={timeData}/>
            </div>
        </div>
    )
}