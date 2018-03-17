import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private activatedRoute

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

}
