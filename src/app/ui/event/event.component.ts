import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Event } from 'src/lib/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  @Input() bg = '';
  @Input() event?: Event;

  constructor() {}

  ngOnInit(): void {}

  @HostBinding('style.backgroundImage')
  get bgImage() {
    return this.event !== null
      ? this.event?.assets.event_hero_bg
      : this.bg.length > 0
      ? `url("${this.bg}")`
      : null;
  }
}
