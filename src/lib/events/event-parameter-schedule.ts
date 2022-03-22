import { EventDate } from "./event-date";

export interface EventParameterSchedule {
  task: string;
  start_date: EventDate;
  end_date: EventDate;
}
