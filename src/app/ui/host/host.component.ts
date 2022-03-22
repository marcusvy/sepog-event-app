import { Component, Input, OnInit } from '@angular/core';
import { EventParameterRealization } from 'src/lib/public-api';

interface EventHost {
  name: string;
  img: string;
  organizer?: boolean;
}

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
})
export class HostComponent implements OnInit {

  @Input('realization')
  realization?: EventParameterRealization;

  // hosts: EventHost[] = [
  //   { name: 'Governo de Rondônia', img: '/assets/hosts/gov_ro.png', organizer: true },
  //   { name: 'Governo Federal', img: '/assets/hosts/gov_br_me.png'},
  // ];

  constructor() {}

  ngOnInit(): void {}

  get organizers() {
    return this.realization?.organizers?.logos;
  }
  get staff() {
    return this.realization?.partners?.logos;
  }
}
