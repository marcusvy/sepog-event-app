import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventBaseConfig } from 'src/lib/event-base-config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _storageKey: string = environment.storageKey;

  private _config$: BehaviorSubject<EventBaseConfig | null> =
    new BehaviorSubject<EventBaseConfig | null>(null);

  constructor(private _http: HttpClient) {}

  getConfigFromApi() {
    const url = environment.apiUrl;
    return this._http.get<EventBaseConfig>(url).pipe(
      distinctUntilChanged(),
      tap((data) => this.cacheData(data)),
      tap((data) => this._config$.next(data))
    );
  }

  get configChanges(): Observable<EventBaseConfig | null> {
    return this._config$.asObservable();
  }

  private cacheData(data: EventBaseConfig): void {
    if (localStorage !== undefined) {
      if (localStorage.getItem('sepog-event') !== null) {
        localStorage.setItem('sepog-event', JSON.stringify(data));
      }
    }
  }
}
