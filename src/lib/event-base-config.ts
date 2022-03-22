import { Event } from "./event";
import { EventParameterRealization } from "./events/event-parameter-realization";
import { EventParameterSection } from "./events/event-parameter-section";
import { EventSectionEnable } from "./events/event-section-enable";

export interface EventBaseConfig {
  event: Event;
  enabled: EventSectionEnable;
  realization: EventParameterRealization;
  sections: EventParameterSection;
}
