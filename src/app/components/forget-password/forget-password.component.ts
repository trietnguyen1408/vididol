import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { observable } from 'rxjs';
import { CapchaService } from '../../services/capcha.service';
import { CapChaCode } from '../../model/capcha'
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.less']
})
export class ForgetPasswordComponent implements OnInit {
  userEmailorPhone: string;
  capChaInput: string;
  capChaObject: CapChaCode;
  isPhone: boolean;
  isEmail: boolean;
  isBlank: false;
  isInvalidInfo: false;
  isInvalidCapcha: false;
  //Mock data will sent capcha image and capcha code for comparision 
  constructor(private route: ActivatedRoute,
    private router: Router, public capCharService: CapchaService) { }

  ngOnInit() {
    $('#SignInModal').modal('hide');
    this.isBlank = JSON.parse(sessionStorage.getItem("isInfoOrCapBlank"));
    this.isInvalidInfo = JSON.parse(sessionStorage.getItem("isInvalidInfo"));
    this.isInvalidCapcha = JSON.parse(sessionStorage.getItem("isInvalidCapcha"));
    this.capCharService.getCapcha().subscribe(receivedCapcha => this.capChaObject=receivedCapcha );
  }
  /**
   * A function to check whether the string contains only number or not
   * @param str string - the string to check
   * return a boolean 
   */
  isNumber(str: string): boolean {
    var pattern = /^\d+$/;
    return pattern.test(str);
  }
  /**
   * A function to check whether the string is an email address
   * @param str string - the string to check
   * return a boolean 
   */
  isEmailAddress(str: string): boolean {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);
  }
  /**
   * A function to check whether information which user input is correct
   * including check if it is an email address or a phone number
   * @param infor string - the string to check
   * return a boolean 
   */
  isValidInfomation(infor: string): boolean {
    if (this.isEmailAddress(infor)) {
      this.isEmail = this.isEmailAddress(infor);
      this.isPhone = false;
      return true;
    }
    else if (this.isNumber(infor)) {
      this.isEmail = false;
      this.isPhone = this.isNumber(infor);
      return true;
    }
    else
      return false;

  }
  /**
  * A function to preserve state of 3 var name isBlank, isInvalidInfo, isInvalidCapcha
  * when the page is reloaded.
  * @param blank string - isBlank, @param infoValid string - isInvalidInfo, @param capChaValid string - isInvalidCapcha
  */
  setAlertState(blank: string, infoValid: string, capChaValid: string) {
    sessionStorage.setItem("isInfoOrCapBlank", blank);
    sessionStorage.setItem("isInvalidInfo", infoValid);
    sessionStorage.setItem("isInvalidCapcha", capChaValid);
  }
  /**
  * A function is triggered when submit button is pressed
  * This function will check blank and password match and then 
  * raise alert 
  */
  onSubmit(): void {
    if (this.userEmailorPhone == null || this.capChaInput == null) {
      this.setAlertState("true", "false", "false");
      location.reload();
    }
    else if (!this.isValidInfomation(this.userEmailorPhone)) {
      this.setAlertState("false", "true", "false");
      location.reload();
    }
    else if(this.capChaInput!=this.capChaObject.code)
    {
      this.setAlertState("false", "false", "true");
      location.reload();
    }
    else {
      //do something about sending information to server 
      //then maybe navigate to mainpage or create some confirm form ??
      this.setAlertState("false", "false", "false");
      this.router.navigate(['']);
    }
  }
}
