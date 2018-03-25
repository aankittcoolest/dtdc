import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit{

  @Input()
  showMain:Boolean

  @Output()
  showMainChange = new EventEmitter<Boolean>()

  @Input()
  currentTab:String

  @Output()
  isLoggedIn = new EventEmitter<boolean>()

  showContactUs:Boolean = false

  constructor(private authService: AuthService) {
  }
  
  ngOnInit() {

  }

  showAuth() {
    this.showMain = false
    this.authService.setCurrentTab("signUp")
    this.showMainChange.emit(false)
  }

  hideAuth() {
    this.showMain=true
    this.showMainChange.emit(true)
  }

  updateCurrentTab(tabName:string) {
    this.currentTab=tabName
  }

  updateLogin(isLoggedIn:boolean) {
    console.log(isLoggedIn)
      this.isLoggedIn.emit(isLoggedIn)
  }

  toggleContactUs(hideContactModalStatus) {
    this.showContactUs = hideContactModalStatus
  }

}
