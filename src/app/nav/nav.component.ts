import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input()
  isAuthenticated: Boolean

  @Output()
  toggleAuthComponent = new EventEmitter<String>()

  @Output()
  isLoggedIn = new EventEmitter<boolean>()

  constructor(private authService: AuthService, private router: Router) {
    this.isAuthenticated = authService.isAuthenticated
   }

   logoutUser() {
     this.authService.logout()
      this.isLoggedIn.emit(false)
      this.isAuthenticated=false
   }

   showAuth(componentName) {
     this.toggleAuthComponent.emit(componentName)
     this.authService.setCurrentTab(componentName)
   }

}
