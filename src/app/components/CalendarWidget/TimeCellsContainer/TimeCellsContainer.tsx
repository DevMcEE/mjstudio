'use client';

import styles from "./TimeCellsContainer.module.css";
import { exportTimeData, times, days} from "@/app/api/booking-page/route.types";
import { TimeCell, TimeCellProps } from "../TimeCell/TimeCell";
import { useEffect, useMemo, useState } from "react";
import { DateTime } from "luxon";
import EventEmitterClient from "@/app/services/EventEmitterClient";

export interface TimeCellContainerProps{
    timeData: exportTimeData,
}
export type timesGroups = {
    [key in times]: {time:DateTime}[]
}
interface dateTime {id: number, date:DateTime}

export const TimeCellsContainer = ({timeData}: TimeCellContainerProps) => {
    const [currentDay, setCurrentDay] = useState<days>(DateTime.now().toFormat("cccc").toLowerCase() as days);
    const [currentTime, setCurrentTime] = useState<string>();


    useEffect(() => {
        EventEmitterClient.on("OnDaySelect", (data) => {
            const dateTime = data as dateTime;
            setCurrentDay(dateTime.date.toFormat('cccc').toLowerCase() as days);
            setCurrentTime("");
        });
        return () => {
            EventEmitterClient.unsubscribe("OnDaySelect");
        };
    }, []);

    useEffect(()=>{
        EventEmitterClient.emit("OnTimeSelect", currentTime)
    }, [currentTime])

    const timeCells = useMemo<timesGroups>(()=>{
        const returnTimeCells = {
            morning:[],
            afternoon:[],
            evening:[]
        } as timesGroups;

        const times: times[] = ["morning", "afternoon", "evening"];
        const start = parseInt(timeData.workingTime[currentDay].start.slice(0,2));
        console.log(start, "start");
        const end = parseInt(timeData.workingTime[currentDay].end.slice(0,2));

        const duration = (end - start) * 60;
        const cellsNumber = duration / timeData.timeSlotDurationMin;
        
        let time = DateTime.fromFormat(timeData.workingTime[currentDay].start, "HH:mm");
        let currentTimeGroup: times = "morning";
        for(let i = 0; i < cellsNumber; i++){
            try{
                if(time >= DateTime.fromFormat(timeData.timeGroups[currentTimeGroup].end, "HH:mm")){
                    currentTimeGroup = times[times.indexOf(currentTimeGroup) + 1];
                }
            }
            catch(error){
                console.error(error);
            }
            returnTimeCells[currentTimeGroup].push({time});
            time = time.plus({minutes:timeData.timeSlotDurationMin});
        }
        return returnTimeCells;
    }, [currentDay])
 
    return (
        <div className={styles.timeGroupsContainer}>
            <p className={`${styles.timeCellHeading}`}>Morning</p>
            <div className={styles.timeCellsContainer} >
                {( timeCells.morning.length !== 0 ? timeCells.morning.map((element)=>(<TimeCell key={element.time.toFormat("HH:mm")} onClick={() => setCurrentTime(element.time.toFormat("HH:mm"))} time={element.time} selected={currentTime === element.time.toFormat("HH:mm")}/>)) : "No time available" )}
            </div>
            
            <p className={`${styles.timeCellHeading}`}>Afternoon</p>
            <div className={styles.timeCellsContainer}>
                {( timeCells.afternoon.length !== 0 ? timeCells.afternoon.map((element)=>(<TimeCell key={element.time.toFormat("HH:mm")} onClick={() => setCurrentTime(element.time.toFormat("HH:mm"))} time={element.time} selected={currentTime === element.time.toFormat("HH:mm")}/>)) : "No time available" )}
            </div>

            <p className={`${styles.timeCellHeading}`}>Evening</p>
            <div className={styles.timeCellsContainer}>
                {( timeCells.evening.length !== 0 ? timeCells.evening.map((element)=>(<TimeCell key={element.time.toFormat("HH:mm")} onClick={() => setCurrentTime(element.time.toFormat("HH:mm"))} time={element.time} selected={currentTime === element.time.toFormat("HH:mm")}/>)) : "No time available" )}
            </div>
        </div>
    )
}