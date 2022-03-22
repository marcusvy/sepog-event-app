import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBaseConfig } from 'src/lib/event-base-config';
import { ApiService } from './shared/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private _apiSub?: Subscription;
  eventConfig?: EventBaseConfig;
  title = 'sepog-event-app';

  constructor(private _api: ApiService) {}

  ngOnInit(): void {
    this._apiSub = this._api
      .getConfigFromApi()
      .subscribe((config) => (this.eventConfig = config));
  }

  ngOnDestroy(): void {
    if (this._apiSub instanceof Subscription) {
      this._apiSub.unsubscribe();
    }
  }
}
