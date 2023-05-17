import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { AvatarService } from '../../services/avatar.service'
import { UserProfile } from '../../model/user-profile';
import { Notification } from '../../model/notification'
import { observable } from 'rxjs';
import { NotifyService } from '../../services/notify.service';
@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.less']
})
export class MainheaderComponent implements OnInit {
  isClick: boolean;
  user: UserProfile;
  constructor(public loginService: LoginService, public avatarService: AvatarService, public notifyService: NotifyService) { }
  userNotifications: Notification[];
  ngOnInit() {
    // Convert String to Boolean
    let isSignIn = JSON.parse(sessionStorage.getItem('VidiDOL-SignIn'));
    this.loginService.signIn(isSignIn);
    if(this.loginService.isLoggedIn)
    {
      this.avatarService.getAvatar().subscribe(fetchUser => this.user=fetchUser);
      this.loginService.currentUser=this.user;
      this.notifyService.getNotifications().subscribe(receivedNotifications => this.userNotifications=receivedNotifications);
    }
  }

  signInSuccess() {
    this.loginService.signIn(true);
    sessionStorage.setItem('VidiDOL-SignIn', 'true');
    location.reload();
  }

  signOutSuccess() {
    this.loginService.signIn(false);
    sessionStorage.setItem('VidiDOL-SignIn', 'false');

    location.reload();
  }
  /**
   * A function to hide notification count when user clicked on the notification symbol
   */
  userViewNotiClick():void
  {
    document.getElementById("notification_count").style.visibility = "hidden";
  }

}
