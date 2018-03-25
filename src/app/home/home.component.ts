import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, DatepickerConfig } from 'ngx-bootstrap/datepicker'
import { AuthService } from '../services/auth/auth.service';
import { LoggingService } from '../services/logging.services';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currentPage='dashboard'
  isLoggedIn:Boolean

  loading:Boolean = true

  //properties for deciding to show/hide login box
  showMain:Boolean = true

  currentTab:String = "signUp"

  constructor(private authService: AuthService, private router: Router) {
    this.currentPage='dashboard'

    authService.getUserInfo()
        .subscribe(
            (response:any) => {
                authService.userId = response.user.userId,
                authService.email = response.user.email
                authService.isAuthenticated = true
                this.isLoggedIn = true
                this.loading = false
            },
            (error) => {
                localStorage.removeItem('isAuthenticated')
                localStorage.removeItem('token')
                this.isLoggedIn = false
                this.loading = false
            }
        )
    
  }

  updateLogin(isLoggedIn:boolean) {
    this.isLoggedIn=isLoggedIn
    if(!isLoggedIn) {
      this.showMain=true
    }
  }

  updateCurrentPage(currentPage) {
    this.currentPage = currentPage
  }

  createUser() {
    // this.authService.signUpUser("test@test.com", "123456")
  }

  showAuthComponent(componentName) {
    this.showMain = false
    this.currentTab = componentName
  }

  updateShowMain(showMainStatus) {
    this.showMain = showMainStatus
  }

}
