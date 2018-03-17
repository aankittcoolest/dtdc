import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit{

  auth:boolean
  showMain:boolean = true
  currentTab:string = "signUp"

  @Output()
  isLoggedIn = new EventEmitter<boolean>()

  constructor() {
    // this.showMain=true
  }
  
  ngOnInit() {

  }

  showAuth() {
    this.showMain=false
    this.auth=true
  }

  hideAuth() {
    this.showMain=true
    this.auth=false
  }

  updateCurrentTab(tabName:string) {
    console.log(tabName)
    this.currentTab=tabName
  }

  updateLogin(isLoggedIn:boolean) {
    console.log(isLoggedIn)
      this.isLoggedIn.emit(isLoggedIn)
  }

}
