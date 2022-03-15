import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  @Input() bg = '';

  constructor() {}

  ngOnInit(): void {}

  @HostBinding('style.backgroundImage')
  get bgImage() {
    return this.bg.length>0 ? `url("${this.bg}")` : null;
  }
}
