import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isEmailVerified:boolean
  isPhoneVerified:boolean

  constructor() { }

  @Output()
  isCancelled = new EventEmitter<boolean>()

  @Output()
  isLoggedIn = new EventEmitter<boolean>()

  ngOnInit() {
  }

  updateEmailVerified(isVerified:boolean) {
    this.isEmailVerified = isVerified
  }

  updatePhoneVerified(isVerified:boolean) {
    this.isPhoneVerified = isVerified
  }

  //save password and log user in
  save() {
    this.isLoggedIn.emit(true)
  }

  cancel() {
    this.isCancelled.emit(true)
  }

}
