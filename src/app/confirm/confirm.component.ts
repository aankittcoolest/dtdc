import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequestBox } from '../request-box';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor() { 
    console.log(this.requestBox)
  }

  @Input()
  requestBox

  @Output()
  book= new EventEmitter<String>()

  ngOnInit() {
  }

  @Output()
  showPreviousProcess = new EventEmitter<string>()

  updateProcess() {
    this.showPreviousProcess.emit('sender-address');
  }

  showNextProcess(){
    this.book.emit('book')
  }

}
