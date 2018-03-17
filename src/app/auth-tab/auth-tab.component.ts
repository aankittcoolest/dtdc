import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-tab',
  templateUrl: './auth-tab.component.html',
  styleUrls: ['./auth-tab.component.css']
})
export class AuthTabComponent implements OnInit {

  constructor() { }

  @Output()
  currentTab = new EventEmitter<string>()

  ngOnInit() {
  }

  showCurrentTab(tabName:string) {
    this.currentTab.emit(tabName)
  }

}
