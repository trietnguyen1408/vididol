import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component'
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { StarProfileComponent } from './components/star-profile/star-profile.component';
import { PaymentProcessComponent } from './components/payment-process/payment-process.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainheaderComponent } from './components/mainheader/mainheader.component'
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component'
const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'starprofile', component: StarProfileComponent },
  { path: 'payment', component: PaymentProcessComponent },
  { path: 'myprofile', component: MyProfileComponent },
  { path: 'notification/:id', component: MainheaderComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
