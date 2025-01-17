import { exportTimeData, workingTimeGroups, workingTimes } from "../route.types";

export const workingTime: workingTimes = {
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

export const timeSlotDurationMin = 15;

export const timeGroups: workingTimeGroups = {
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

export const timeData: exportTimeData = {
    workingTime,
    timeGroups,
    timeSlotDurationMin
}