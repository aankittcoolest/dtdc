import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-phone-verify',
  templateUrl: './phone-verify.component.html',
  styleUrls: ['./phone-verify.component.css']
})
export class PhoneVerifyComponent implements OnInit {

  isVerificationPhoneSent:boolean

  @Output()
  isPhoneVerified = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  //add logic to send mail to the user
  sendOtpPhone() {
    console.log("ok")
    this.isVerificationPhoneSent=true
  }

  reVerify() {
    this.isVerificationPhoneSent=false
  }

  verifyOtp() {
    this.isPhoneVerified.emit(true)
  }

}
