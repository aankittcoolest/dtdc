import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  @Output()
  hideContactUs = new EventEmitter<Boolean>()

  ngOnInit() {
  }

  closeContactModal() {
    this.hideContactUs.emit(false)
    console.log("ok")
  }

}
