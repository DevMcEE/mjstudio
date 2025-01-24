'use client';

import { useEffect, useState } from "react";
import styles from "./DatePicker.module.css";
import { DateTime } from "luxon";
import { DayCell } from "../DayCell";
import { dayCellsMapsClient } from "@/app/services/DayCellsMapClient";
import { cell } from "@/app/models/DayCellsMap";
import EventEmitterClient from "@/app/services/EventEmitterClient";

export const DatePicker = () => {
  const [selectedCellId, setSelectedCellId] = useState<number>(0);
  const currentDate: DateTime = DateTime.now();
  const format = 'yyyy-MM-dd';
  const [cellsList, setCellsList] = useState<cell[]>(dayCellsMapsClient.getRowForView());

  useEffect(()=>{
    EventEmitterClient.emit("OnDaySelect", {id: selectedCellId, date: dayCellsMapsClient.cellsMap[selectedCellId].date});
  }, [selectedCellId]);
  useEffect(() => {
    EventEmitterClient.on("DatePickerRowUpdated", () => {
      setCellsList(dayCellsMapsClient.getRowForView());
    });

    return () => {
      EventEmitterClient.unsubscribe("DatePickerRowUpdated");
    };
  },[]);
  useEffect(()=>{
    console.log(cellsList, "current row");
  }, [cellsList]);

  return (
    <div className={styles.dataPickerContainer}>
      <button onClick={() => dayCellsMapsClient.scrollTo("left")} className={`${styles.arrowButton} ${styles.leftArrowButton}`}>&lsaquo;</button>
      <div className={styles.cellsContainer}>
        {cellsList.map((item, index) => {
          return (
            <DayCell key={index} onClick={()=>setSelectedCellId(item.id)} isCurrentDay={item.date.toFormat(format) === currentDate.toFormat(format)} isSelected={item.id === selectedCellId} date={item.date} isUnavailable={item.date !<= currentDate && (item.date.toFormat(format)===currentDate.toFormat(format) ? false : true)}/>
          );
        })}
      </div>
      <button onClick={() => dayCellsMapsClient.scrollTo("right")} className={`${styles.arrowButton} ${styles.rightArrowButton}`}>&rsaquo;</button>
    </div>
  );
};