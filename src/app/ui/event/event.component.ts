import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  @Input() bg = '';

  constructor() {}

  ngOnInit(): void {}

  @HostBinding('style.backgroundImage')
  get bgImage() {
    return this.bg.length > 0 ? `url("${this.bg}")` : null;
  }
}
