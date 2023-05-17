import { Injectable } from '@angular/core';
import { Star } from '../model/star';
import { MOCK_STARS } from '../mock-object/mock-star';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor() { }

  getStars(): Observable<Star[]> {
    // TODO: send the message _after_fetching stars
    return of(MOCK_STARS);
  }
}
