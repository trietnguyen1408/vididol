import { Injectable } from '@angular/core';
import {UserProfile} from'src/app/model/user-profile'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  currentUser:UserProfile;
  constructor() { }

  /**
   * A draft function simulate the log in process
   * @param result boolean - true if user success logging in
   */
  signIn(result: boolean): void {
    this.isLoggedIn = result;
  }

  /**
   * A draft function simulate the register process
   * @param result boolean - true if user success registering
   */
  signUp(result): void {

  }


}
