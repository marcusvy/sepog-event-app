import { Component, OnInit } from '@angular/core';

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
  hosts: EventHost[] = [
    { name: 'Governo de Rondônia', img: '/assets/hosts/gov_ro.png', organizer: true },
    { name: 'Governo Federal', img: '/assets/hosts/gov_br_me.png'},
  ];

  constructor() {}

  ngOnInit(): void {}

  get organizers() {
    return this.hosts.filter((host) => host.organizer === true);
  }
  get staff() {
    return this.hosts.filter((host) => !!!host.organizer);
  }
}
