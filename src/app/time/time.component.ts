import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, DatepickerConfig } from 'ngx-bootstrap/datepicker'
import { Time } from '../time';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {

  dateOfPickUp = new Date()

  // currentLimit = new Date().getHours()
  currentLimit = 14

  @Output()
  selectedTime = new EventEmitter<Time>()

  @Output()
  showPreviousProcess = new EventEmitter<string>()

  currentSelectedTime

  timeRanges= [
    {
    'limit': 10,
    'range': '10-12',
    },
    {
    'limit': 12,
    'range': '12-14',
    },
    {
    'limit': 14,
    'range': '14-16',
    },
    {
    'limit': 16,
    'range': '16-18'
    },
  ]

  isLoggedIn:boolean

  datePickerConfig: Partial<BsDatepickerConfig>

  constructor() {
    this.datePickerConfig = Object.assign({},{ containerClass: 'theme-dark-blue', 
    showWeekNumbers: false,
     minDate: new Date(),
    dateInputFormat: 'DD/MM/YYYY' })
  }

  updateLogin(isLoggedIn:boolean) {
    this.isLoggedIn=true
  }

  updateTime(date) {
    console.log(date);
    if(date.getDate() > new Date().getDate()) {
      this.currentLimit = 0
    } else {
      this.currentLimit = date.getHours()
    }
  }

  selectTime(time) {
    console.log(time);
    this.currentSelectedTime = time
  }


  showNextProcess(){
    var time = new Time(
      this.dateOfPickUp.toDateString(),
      this.currentSelectedTime.range)
    this.selectedTime.emit(time)
  }
  
  updateProcess() {
    this.showPreviousProcess.emit('sender-address');
  }

}
