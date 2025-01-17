export interface workingHours {
    start: string,
    end: string
}

export type days = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

export type workingTimes = {
    [key in days]: workingHours
}

export type times = "morning" | "afternoon" | "evening"

export type workingTimeGroups = {
    [key in times]: workingHours
}

export interface exportTimeData {
    workingTime: workingTimes,
    timeSlotDurationMin: number,
    timeGroups: workingTimeGroups,
}