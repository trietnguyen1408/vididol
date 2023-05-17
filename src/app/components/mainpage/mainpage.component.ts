import { Component, OnInit, Input } from '@angular/core';
import { Star } from '../../model/star';
import { LoginService } from '../../services/login.service'
import { StarService } from '../../services/star.service';
import { UserProfile } from '../../model/user-profile';
import { UserRequest } from '../../model/user-request';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.less']
})
export class MainpageComponent implements OnInit {
  maxChars = 500;

  // make a package of user request
  userRequest: UserRequest = {
    toEmail: '',
    message: ''
  };
  currentUser: UserProfile;
  stars: Star[];
  // Init to make sure the Modal of Order not found null user.
  // TO-DO : find solution for handle null case
  selectedStar: Star = {
    id: 1,
    name: "",
    price: 0,
    isOfficial: false
  };

  constructor(private starService: StarService, public loginService: LoginService) { }


  ngOnInit() {
    this.getStars();
    //try to pass user from main header to main page :))
    if (this.loginService.isLoggedIn) {
      this.currentUser = this.loginService.currentUser;
    }
  }
  /**
   * A function to get stars when the web is initialized
   */
  getStars(): void {
    this.starService.getStars().subscribe(stars => this.stars = stars);
  }
  /**
   * A function trigger when user click on the mail icon of the star
   * @param star Star - the star who is selected
   */
  onSelect(star:Star):void{
    //if user login the star will be selected, order modal will be shown, login modal otherwise
    if(this.currentUser)
    {
      this.selectedStar=star;
      $('#OrderModal').modal('show');
    }
    else
      $('#SignInModal').modal('show');
  }
}
