import { Injectable } from '@angular/core';
import { Observable ,of } from 'rxjs';
import {Notification} from '../model/notification'
import {DEFAULT_NOTIFICATION} from '../mock-object/mock-notification'
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }
  getNotifications():Observable<Notification[]> 
  {
    return of (DEFAULT_NOTIFICATION);
  }
}
