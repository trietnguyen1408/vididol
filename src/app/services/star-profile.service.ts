import { Injectable } from '@angular/core';
import { MOCK_STARPROFILE } from '../mock-object/mock-star-profile';
import { Observable, of } from 'rxjs';
import { StarProfile } from '../model/star-profile';

@Injectable({
  providedIn: 'root'
})
export class StarProfileService {

  constructor() { }

  getStarProfile(): Observable<StarProfile> {
    return of(MOCK_STARPROFILE);
  }
}
