import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {

  isVerificationMailSent:boolean
  
  @Output()
  isEmailVerified = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  //add logic to send mail to the user
  sendOtpMail() {
    this.isVerificationMailSent=true
  }

  reVerify() {
    this.isVerificationMailSent=false
  }

  verifyOtp() {
    this.isEmailVerified.emit(true)
  }

}
