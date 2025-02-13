'use client';

import styles from "./TimeCellsContainer.module.css";
import { Time } from "@/app/api/booking-page/route.types";
import { TimeCell } from "../TimeCell/TimeCell";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { TIME_GROUPS } from "@/app/api/booking-page/working-time/data";
import EventEmitterClient from "@/app/services/EventEmitterClient";
import { Route } from "@/app/api/route.types";

export type TimeRange = `${string}:${string}`;

export type TimesGroups = {
  [key in Time]: TimeRange[]
}

export interface TimeCellContainerProps {
  API_URL: string;
}

interface dateTime { id: number, date: DateTime }

export const TimeCellsContainer = ({ API_URL }: TimeCellContainerProps) => {
  const [currentDay, setCurrentDay] = useState<DateTime>(DateTime.now());
  const [currentTime, setCurrentTime] = useState<string>();
  const [timeSlots, setTimeSlots] = useState<TimesGroups>();
  const timeRangeFormat = "HH:mm";

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

  const isAvailable = (dateTime: DateTime) => {
    return dateTime > DateTime.now() || currentDay > DateTime.now();
  };

  const getClickFunc = (timeRange: TimeRange) => {
    if(isAvailable(getDateTimeBySlot(timeRange))){
      return () => setCurrentTime(timeRange);
    }

    return () => {};
  };

  const getDateTimeBySlot = (timeRange: TimeRange) => {
    const dateTimeBySlot = DateTime.fromFormat(timeRange, timeRangeFormat);

    dateTimeBySlot.set({day: currentDay.day, month: currentDay.month, year: currentDay.year});

    return dateTimeBySlot;
  };

  return (
    <div className={styles.timeGroupsContainer}>
      {Object.keys(TIME_GROUPS).map(
        (key) => {
          return (
            <div key={`${key}-container`}>
              <p key={`${key}-header`} className={`${styles.timeCellHeading}`}>{key}</p>
              <div key={key} className={styles.timeCellsContainer}>
                {(timeSlots
                  ? (timeSlots[key as Time].length
                    ? timeSlots[key as Time].map((element) => (
                      <TimeCell key={element}
                        onClick={getClickFunc(element)}
                        time={element}
                        selected={currentTime === element}
                        available={isAvailable(getDateTimeBySlot(element))}
                      />
                    ))
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