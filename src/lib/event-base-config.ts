import { Event } from "./event";
import { EventParameterRealization } from "./events/event-parameter-realization";
import { EventSection } from "./events/event-section";
import { EventSectionEnable } from "./events/event-section-enable";

export interface EventBaseConfig {
  event: Event;
  enabled: EventSectionEnable;
  realization: {
    organizers: EventParameterRealization;
    partners: EventParameterRealization;
  };
  sections: {
    subscription: EventSection;
    schedule: EventSection;
    speakers: EventSection;
    contact: EventSection;
  };
}
