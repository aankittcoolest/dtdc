import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, DatepickerConfig } from 'ngx-bootstrap/datepicker'
import { AuthService } from './services/auth/auth.service';
import { LoggingService } from './services/logging.services';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  currentPage='dashboard'
  isLoggedIn:Boolean

  //properties for deciding to show/hide login box
  showMain:Boolean = true

  currentTab:String = "signUp"

  constructor(private authService: AuthService, private router: Router) {
    console.log(this.router.url)

    authService.getUserInfo()
        .subscribe(
            (response:any) => {
                authService.userId = response.user.userId,
                authService.email = response.user.email
                authService.isAuthenticated = true
                this.isLoggedIn = true
            },
            (error) => {
                localStorage.removeItem('isAuthenticated')
                localStorage.removeItem('token')
                this.isLoggedIn = false
            }
        )
    
  }

  updateLogin(isLoggedIn:boolean) {
    this.isLoggedIn=isLoggedIn
  }

  updateCurrentPage(currentPage) {
    this.currentPage = currentPage
  }

  createUser() {
    // this.authService.signUpUser("test@test.com", "123456")
  }

  showAuthComponent(componentName) {
    this.authService.showMain = false
    this.showMain = this.authService.showMain
    console.log(componentName)
    this.currentTab = componentName
  }

}
