import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  isLoggedIn = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log("ok")
    this.isLoggedIn.emit(true)
  }

}
