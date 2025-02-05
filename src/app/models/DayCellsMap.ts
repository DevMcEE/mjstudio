'use client';

import { DateTime } from "luxon";
import EventEmitterClient from "../services/EventEmitterClient";

export interface cell {
    id: number,
    date: DateTime,
}
interface coordinates {
    start:number,
    end:number,
}

export class DayCellsMap{
  cellsMap: cell[];
  rowCellsLimit: number;
  coordinates: coordinates;
  daysInWeek: number;

  constructor(rowCellsLimit: number){
    this.cellsMap = [];
    this.rowCellsLimit = rowCellsLimit;
    this.coordinates = {
      start:0,
      end:0
    };
    const currentDate: DateTime = DateTime.now();
    const dates: DateTime[] = [];
    let date: DateTime = currentDate;

    for(let i = 0; i < this.rowCellsLimit; i++){
      dates.push(date);
      date = date.plus({day:1});

    }
    this.pushMany(dates);
    this.coordinates.end = this.rowCellsLimit;
    this.daysInWeek = 7;
  }

  getRowForView(){
    return this.cellsMap.slice(this.coordinates.start, this.coordinates.end);
  }

  scrollTo(side: "right" | "left"){
    console.log(side);
    const dates: DateTime[] = [];

    if(side === "right"){
      const lastCell = this.cellsMap[this.cellsMap.length - 1];
      let date = lastCell.date;
      const daysDiff = this.daysInWeek + 1 - this.cellsMap[this.coordinates.start].date.weekday;

      for(let i = 0; i < daysDiff; i++){
        date = date.plus({day:1});
        dates.push(date);
      }
      this.pushMany(dates);
            
      this.coordinates.start += daysDiff;
      this.coordinates.end += daysDiff;
    }
    if(side === "left"){
      if(this.coordinates.start != 0){
        if(this.coordinates.start - this.rowCellsLimit < 0){
          this.coordinates.start = 0;
          this.coordinates.end = this.rowCellsLimit;
        }
        else{
          this.coordinates.start -= this.rowCellsLimit;
          this.coordinates.end -= this.rowCellsLimit;
        }

      }
    }
    EventEmitterClient.emit("DatePickerRowUpdated", null);
  }

  unshiftMany(dates: DateTime[]){
    dates.forEach((element, index)=>this.cellsMap.unshift({id:index, date:element}));
    for(let i = 0; i < this.cellsMap.length; i++){
      this.cellsMap[i].id += dates.length;
    }
    this.coordinates.start += dates.length;
    this.coordinates.end += dates.length;
  }

  pushMany(dates: DateTime[]){
    const arrayLength = this.cellsMap.length;

    dates.forEach((element, index)=>this.cellsMap.push({id: arrayLength + index, date: element}));
  }
    
  push(date:DateTime){
    this.cellsMap.push({id: this.cellsMap.length, date:date});
  }

  unshift(date:DateTime){
    this.cellsMap.unshift({id:0, date:date});
    for(let i = 0; i < this.cellsMap.length; i++){
      this.cellsMap[i].id += 1;
    }
    this.coordinates.start += 1;
    this.coordinates.end += 1;
  }
}