import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import locales from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { MainheaderComponent } from './components/mainheader/mainheader.component';
import { MainfooterComponent } from './components/mainfooter/mainfooter.component';
import { StarProfileComponent } from './components/star-profile/star-profile.component';
import { RequestCreateComponent } from './components/request-create/request-create.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PaymentProcessComponent } from './components/payment-process/payment-process.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import * as bootstrap from 'bootstrap';
import * as $ from 'jquery';
import { SafePipe } from './pipes/safe.pipe';
registerLocaleData(locales, 'vi');

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    MainpageComponent,
    MainheaderComponent,
    MainfooterComponent,
    StarProfileComponent,
    RequestCreateComponent,
    ForgetPasswordComponent,
    MyProfileComponent,
    PaymentProcessComponent,
    PageNotFoundComponent,
    ResetPasswordComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
