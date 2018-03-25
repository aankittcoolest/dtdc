import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-auth-tab',
  templateUrl: './auth-tab.component.html',
  styleUrls: ['./auth-tab.component.css']
})
export class AuthTabComponent implements OnInit {

  constructor(private authService: AuthService) {
    this.activeTab = this.authService.currentTab
   }

  @Output()
  currentTabChange = new EventEmitter<string>()

  @Input()
  currentTab

  activeTab:String

  ngOnInit() {
    this.authService.currentTabUpdated.subscribe(
      (currentTab) => this.activeTab = currentTab
    )
  }

  showCurrentTab(tabName:string) {
    this.activeTab = tabName
    this.currentTabChange.emit(tabName)
  }

}
