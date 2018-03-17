import { Component } from '@angular/core';
import { BsDatepickerConfig, DatepickerConfig } from 'ngx-bootstrap/datepicker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  currentPage='dashboard'

  isLoggedIn:boolean


  constructor() {
  }

  updateLogin(isLoggedIn:boolean) {
    this.isLoggedIn=true
  }

  updateCurrentPage(currentPage) {
    this.currentPage = currentPage
  }

}
