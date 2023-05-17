import { Injectable } from '@angular/core';
import { Observable ,of } from 'rxjs';
import {CapChaCode} from '../model/capcha'
import {DEFAULT_CAPCHA} from '../mock-object/mock-capcha'
@Injectable({
  providedIn: 'root'
})
export class CapchaService {

  constructor() { }
  getCapcha():Observable<CapChaCode> 
  {
    return of (DEFAULT_CAPCHA);
  }
}
