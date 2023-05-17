import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.less']
})
export class ResetPasswordComponent implements OnInit {
  newPass: string;
  confirmPass: string;
  securityCode: string;
  isPassNotMatch: false;
  isBlank: false;
  isCodeNotMatch: false;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.isBlank = JSON.parse(sessionStorage.getItem("isBlank"));
    this.isPassNotMatch = JSON.parse(sessionStorage.getItem("isPassNotMatch"));
    this.isCodeNotMatch = JSON.parse(sessionStorage.getItem("isCodeNotMatch"));
  }
   /**
   * A function to preserve state of 3 var name isBlank, isPassNotMatch, isCodeNotMatch
   * when the page is reloaded.
   * @param blank string - isBlank, @param passNotMatch string - isPassNotMatch, @param codeNotMatch string - isCodeNotMatch
   */
  setAlertState(blank: string, passNotMatch: string, codeNotMatch: string) {
    sessionStorage.setItem("isBlank", blank);
    sessionStorage.setItem("isPassNotMatch", passNotMatch);
    sessionStorage.setItem("isCodeNotMatch", codeNotMatch);
  }
  /**
   * A function is triggered when submit button is pressed
   * This function will check blank and password match and then 
   * raise alert 
   */
  SubmitPass() {
    if (this.newPass==null || this.confirmPass==null|| this.securityCode==null) {
      this.setAlertState("true","false","false");
      location.reload();
    }
    else if (this.newPass != this.confirmPass) {
      this.setAlertState("false","true","false");
      location.reload();
    }
    else {
      //do something about sending information to server 
      //maybe navigate to mainpage without sign in in order to make user sign in
      //or auto sign in ??
      this.setAlertState("false","false","false");
      this.router.navigate(['']);
    }
  }
}
