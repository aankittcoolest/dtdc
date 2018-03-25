import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  isLoggedIn = new EventEmitter<boolean>()

  @Output()
  isCancelled = new EventEmitter<boolean>()

  user = new User()

  isLoginFail = false

  constructor(private authService: AuthService) {


    // let user = {
    //   email: 'test3@test.com',
    //   password: 'password',
    //   phone: '12345678'
    // }
    // authService.signup(user)
  }

  ngOnInit() {
  }

  login() {
    console.log("ok")
    this.isLoggedIn.emit(true)
  }

  onSubmit() {
    console.log(this.user)
    var credentials = {
      email: this.user.email,
      password: this.user.password
    }
    var result = this.authService.login(credentials)
      .subscribe(
        (response: any) => {
          console.log(response)
          if (response.message == 'Auth successful') {
            this.authService.token = response.token
            this.authService.isAuthenticated = true
            localStorage.setItem('isAuthenticated', 'true')
            localStorage.setItem('token', response.token)
            this.isLoggedIn.emit(true)
          } else {
            this.authService.isAuthenticated = true
            this.isLoginFail = true
          }
        },
        (error) => {
          this.authService.isAuthenticated = false
          this.isLoginFail = true
        }
      )
    console.log(result)
  }


  cancel() {
    this.isCancelled.emit(true)
  }

}
