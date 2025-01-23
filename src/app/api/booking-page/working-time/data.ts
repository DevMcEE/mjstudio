import { ExportTimeData, Times, WorkingTimeGroups, WorkingTimes } from "../route.types";

export const WORKING_TIME: WorkingTimes = {
    monday: {
        start: '10:00',
        end: '18:00'
    },
    tuesday: {
        start: '10:00',
        end: '18:00'
    },
    wednesday: {
        start: '10:00',
        end: '18:00'
    },
    thursday: {
        start: '10:00',
        end: '18:00'
    },
    friday: {
        start: '10:00',
        end: '18:00'
    },
    saturday: {
        start: '10:00',
        end: '18:00'
    },
    sunday:{
        start: '12:00',
        end: '18:00'
    }
}

export const TIME_SLOT_DURATION_MIN = 15;

export const TIME_GROUPS: WorkingTimeGroups = {
    morning:{
        start: '10:00',
        end: '12:00',
    },
    afternoon:{
        start:'12:00',
        end:'17:00',
    },
    evening:{
        start:'17:00',
        end:'18:00',
    }
}

export const TIME_DATA: ExportTimeData = {
    workingTime: WORKING_TIME,
    timeGroups: TIME_GROUPS,
    timeSlotDurationMin: TIME_SLOT_DURATION_MIN
}