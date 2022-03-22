import { EventAssets } from "./events/event-assets";
import { EventDate } from "./events/event-date";
import { EventParameterContact } from "./events/event-parameter-contact";
import { EventParameterSchedule } from "./events/event-parameter-schedule";
import { EventParameterSubscription } from "./events/event-parameter-subscription";

export interface Event {
  title: string;
  subtitle: string;
  start_date: EventDate;
  end_date: EventDate;
  start_time: string;
  end_time: string;
  address: string;
  assets: EventAssets;
  subscription: EventParameterSubscription;
  contact: EventParameterContact;
  schedule: EventParameterSchedule[];
}
