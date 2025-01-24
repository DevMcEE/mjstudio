export interface WorkingHoursRange {
    start: string,
    end: string
}

export type WeekDay = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

export type WorkingTimes = Record<WeekDay, WorkingHoursRange>

export type Time = "morning" | "afternoon" | "evening"

export type WorkingTimeGroups = Record<Time, WorkingHoursRange>

export interface ExportTimeData {
    workingTime: WorkingTimes,
    timeSlotDurationMin: number,
    timeGroups: WorkingTimeGroups,
}