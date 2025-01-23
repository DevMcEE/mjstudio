import { DateTime } from "luxon";
import { TIME_DATA } from "../working-time/data";
import { Times, WeekDay } from "../route.types";
import { TimesGroups } from "@/app/components/CalendarWidget/TimeCellsContainer/TimeCellsContainer";

export const TIME_CELLS = (ISO: string)=>{
    const currentDay = DateTime.fromISO(ISO);
    const shortDay: WeekDay = currentDay.toFormat("cccc").toLowerCase() as WeekDay;
    const returnTimeCells = {
        morning:[],
        afternoon:[],
        evening:[]
    } as TimesGroups;

    const times: Times[] = ["morning", "afternoon", "evening"];
    const start = parseInt(TIME_DATA.workingTime[shortDay].start.slice(0,2));
    const end = parseInt(TIME_DATA.workingTime[shortDay].end.slice(0,2));

    const duration = (end - start) * 60;
    const cellsNumber = duration / TIME_DATA.timeSlotDurationMin;
    
    let time = DateTime.fromFormat(TIME_DATA.workingTime[shortDay].start, "HH:mm");
    let currentTimeGroup: Times = "morning";
    for(let i = 0; i < cellsNumber; i++){
        try{
            if(time >= DateTime.fromFormat(TIME_DATA.timeGroups[currentTimeGroup].end, "HH:mm")){
                currentTimeGroup = times[times.indexOf(currentTimeGroup) + 1];
            }
        }
        catch(error){
            console.error(error);
        }
        returnTimeCells[currentTimeGroup].push(time.toFormat("HH:mm") as `${string}:${string}`);
        time = time.plus({minutes:TIME_DATA.timeSlotDurationMin});
    }
    return returnTimeCells;
}