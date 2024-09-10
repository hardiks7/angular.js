import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new Subject<string>();
  public notification$ = this.notificationSubject.asObservable();  

  private initialState = JSON.stringify(localStorage);

  constructor() {
    interval(10000).subscribe(() => {
      this.checkForLocalStorageChanges();
    });
  }

  private checkForLocalStorageChanges(): void {
    const currentState = JSON.stringify(localStorage);
    if (currentState !== this.initialState) {
      this.notify('Changes detected! Please refresh the page.');
      this.initialState = currentState;
    }
  }

  notify(message: string): void {
    this.notificationSubject.next(message);
  }
}
