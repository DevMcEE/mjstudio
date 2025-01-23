'use client';

import styles from "./TimeCellsContainer.module.css";
import { Times, WeekDay} from "@/app/api/booking-page/route.types";
import { TimeCell } from "../TimeCell/TimeCell";
import { useEffect, useMemo, useState } from "react";
import { DateTime } from "luxon";
import { TIME_GROUPS } from "@/app/api/booking-page/working-time/data";
import EventEmitterClient from "@/app/services/EventEmitterClient";
import { Route } from "@/app/api/route.types";

export type TimesGroups = {
    [key in Times]: `${string}:${string}`[]
}

export interface TimeCellContainerProps{
    API_URL: string;
}

interface dateTime {id: number, date:DateTime}

export const TimeCellsContainer = ({API_URL}: TimeCellContainerProps) => {
    const [currentDay, setCurrentDay] = useState<DateTime>(DateTime.now());
    const [currentTime, setCurrentTime] = useState<string>();
    const [timeSlots, setTimeSlots] = useState<TimesGroups>();

    useEffect(() => {
        EventEmitterClient.on("OnDaySelect", (data) => {
            const dateTime = data as dateTime;
            setCurrentDay(dateTime.date);
            setCurrentTime("");
        });
        return () => {
            EventEmitterClient.unsubscribe("OnDaySelect");
        };
    }, []);

    useEffect(()=>{
        EventEmitterClient.emit("OnTimeSelect", currentTime)
        console.log(currentTime);
    }, [currentTime])

    useEffect(()=>{
        const timeSlots = async () =>{
            try{
                const url = new URL(`${API_URL}/${Route.bookingPageTimeSlots}`);
                //@ts-ignore
                url.searchParams.append("date", currentDay.toISO());
                const response = await fetch(url).then((res)=>res.json());
                console.log(response, "response");
                setTimeSlots(response);
            }
            catch(error){
                console.error(error);
            }
        }
        timeSlots();
    }, [currentDay])

    const getElementsSlots = (key: Times)=>{
        const slots = useMemo(()=>{
            return (
                <div key={key} className={styles.timeCellsContainer}>
                    {/*@ts-ignore*/}
                    {(timeSlots ? ( timeSlots[key].length !== 0 ? timeSlots[key].map((element)=>(<TimeCell key={element} onClick={DateTime.fromFormat(element, "HH:mm") > DateTime.fromFormat(DateTime.now().toFormat("HH:mm"), "HH:mm") ? () => setCurrentTime(element) : () => {}} time={element} selected={currentTime === element} available={DateTime.fromFormat(element, "HH:mm") > DateTime.fromFormat(DateTime.now().toFormat("HH:mm"), "HH:mm")}/>)) : "No time available" ) : (<></>))}
                </div>
            )
        }
        , [timeSlots, currentTime])
        return slots;
    }
 
    return (
        <div className={styles.timeGroupsContainer}>
            {Object.keys(TIME_GROUPS).map(
                (key)=>{
                    key[0].toUpperCase()
                    return (
                        <div key={`${key}-container`}>
                            <p key={`${key}-header`} className={`${styles.timeCellHeading}`}>{key}</p>
                            {getElementsSlots(key as Times)}
                        </div>
                    )
                }
                )}
        </div>
    )
}