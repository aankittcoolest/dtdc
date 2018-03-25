import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { AuthTabComponent } from './auth-tab/auth-tab.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { PhoneVerifyComponent } from './phone-verify/phone-verify.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StepBarComponent } from './step-bar/step-bar.component';
import { SenderAddressComponent } from './sender-address/sender-address.component';
import { ReceiverAddressComponent } from './receiver-address/receiver-address.component';
import { TimeComponent } from './time/time.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { BookComponent } from './book/book.component';
import { AddressListComponent } from './address-list/address-list.component';
import { NewAddressComponent } from './new-address/new-address.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { NavComponent } from './nav/nav.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth/auth.service';
import { SenderAddressService } from './services/sender-address.service';
import { ReceiverAddressService } from './services/receiver-address.service';
import { RequestHistoryService } from './services/request-history.service';

const appRoutes:Routes = [
  // { path: 'home', component: HomeComponent},
  // { path: 'signup', component: SignupComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'contact-us', component: ContactusComponent},
  // { path: 'dashboard' , component: DashboardComponent },
  // { path: 'progress-bar' , component: StepBarComponent },
  // { path: 'sender-address' , component: SenderAddressComponent },
  // { path: 'receiver-address' , component: ReceiverAddressComponent },
  // { path: 'time' , component: TimeComponent },
  // { path: 'confirm' , component: ConfirmComponent },
  // { path: 'book' , component: BookComponent },
  // { path: 'new-request' , component: NewRequestComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ContactusComponent,
    MainComponent,
    AuthTabComponent,
    EmailVerifyComponent,
    PhoneVerifyComponent,
    DashboardComponent,
    StepBarComponent,
    SenderAddressComponent,
    ReceiverAddressComponent,
    TimeComponent,
    ConfirmComponent,
    BookComponent,
    AddressListComponent,
    NewAddressComponent,
    NewRequestComponent,
    NavComponent,
    HistoryComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RecaptchaModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ AuthService,
    SenderAddressService,
    ReceiverAddressService,
    RequestHistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
