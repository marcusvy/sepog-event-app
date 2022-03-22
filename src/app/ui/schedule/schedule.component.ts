import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/lib/event';
import { EventParameterSchedule } from 'src/lib/public-api';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input()
  event?: Event;

  tasks?: EventParameterSchedule[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks = this.event?.schedule;
  }

}
