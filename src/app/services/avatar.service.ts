import { Injectable } from '@angular/core';
import { Observable ,of } from 'rxjs';
import { UserProfile} from '../model/user-profile';
import {DEFAULT_USER} from '../mock-object/mock-user'
@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor() { }
  getAvatar():Observable<UserProfile> 
  {
    return of (DEFAULT_USER);
  }

}
