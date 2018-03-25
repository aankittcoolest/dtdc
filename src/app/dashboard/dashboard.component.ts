import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RequestHistoryService } from '../services/request-history.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  private activatedRoute

  private showContactUs

  constructor(activatedRoute: ActivatedRoute) { 
    this.activatedRoute = activatedRoute
  }

  @Output()
  currentPage = new EventEmitter<string>()

  ngOnInit() {
  }

  updateCurrentPage(currentPage) {
    this.currentPage.emit(currentPage)
  }

  toggleContactUs(hideContactModalStatus) {
    this.showContactUs = hideContactModalStatus
  }

}
