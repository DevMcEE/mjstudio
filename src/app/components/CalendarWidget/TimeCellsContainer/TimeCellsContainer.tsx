'use client';

import styles from "./TimeCellsContainer.module.css";
import { Time } from "@/app/api/booking-page/route.types";
import { TimeCell } from "../TimeCell/TimeCell";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { TIME_GROUPS } from "@/app/api/booking-page/working-time/data";
import EventEmitterClient from "@/app/services/EventEmitterClient";
import { Route } from "@/app/api/route.types";

export type TimesGroups = {
  [key in Time]: `${string}:${string}`[]
}

export interface TimeCellContainerProps {
  API_URL: string;
}

interface dateTime { id: number, date: DateTime }

export const TimeCellsContainer = ({ API_URL }: TimeCellContainerProps) => {
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

  useEffect(() => {
    EventEmitterClient.emit("OnTimeSelect", currentTime);
    console.log(currentTime);
  }, [currentTime]);

  useEffect(() => {
    const timeSlots = async () => {
      try {
        const url = new URL(`${API_URL}/${Route.bookingPageTimeSlots}`);

        url.searchParams.append("date", currentDay.toISO() || "");
        const response = await fetch(url).then((res) => res.json());

        console.log(response, "response");
        setTimeSlots(response);
      }
      catch (error) {
        console.error(error);
      }
    };

    timeSlots();
  }, [currentDay, API_URL]);

  return (
    <div className={styles.timeGroupsContainer}>
      {Object.keys(TIME_GROUPS).map(
        (key) => {
          return (
            <div key={`${key}-container`}>
              <p key={`${key}-header`} className={`${styles.timeCellHeading}`}>{key}</p>
              <div key={key} className={styles.timeCellsContainer}>
                {(timeSlots
                  ? (timeSlots[key as Time].length !== 0
                    ? timeSlots[key as Time].map((element) => (<TimeCell key={element} onClick={DateTime.fromFormat(element, "HH:mm") > DateTime.fromFormat(DateTime.now().toFormat("HH:mm"), "HH:mm")
                      ? () => setCurrentTime(element)
                      : () => { }} time={element} selected={currentTime === element} available={DateTime.fromFormat(element, "HH:mm") > DateTime.fromFormat(DateTime.now().toFormat("HH:mm"), "HH:mm")} />))
                    : "No time available")
                  : (<></>))}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};