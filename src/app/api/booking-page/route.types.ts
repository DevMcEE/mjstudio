import { TimeRange } from "@/app/components/CalendarWidget/TimeCellsContainer/TimeCellsContainer";

export interface WorkingHoursRange {
    start: TimeRange,
    end: TimeRange
}

export const WeekDay = {
  monday: 'monday',
  tuesday: 'tuesday',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday',
  sunday: 'sunday'
} as const;
export type WeekDay = typeof WeekDay[keyof typeof WeekDay];

export type WorkingTimes = Record<WeekDay, WorkingHoursRange>

export type Time = "morning" | "afternoon" | "evening"

export type WorkingTimeGroups = Record<Time, WorkingHoursRange>

export interface ExportTimeData {
    workingTime: WorkingTimes,
    timeSlotDurationMin: number,
    timeGroups: WorkingTimeGroups,
}