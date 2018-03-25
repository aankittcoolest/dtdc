import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, DatepickerConfig } from 'ngx-bootstrap/datepicker'
import { Time } from '../time';
import { NewRequestService } from '../services/new-request.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {

  dateOfPickUp = new Date()

  currentLimit = new Date().getHours()
  // currentLimit = 14

  @Output()
  selectedTime = new EventEmitter<Time>()

  @Output()
  showPreviousProcess = new EventEmitter<string>()

  currentSelectedTime

  timeRanges= [
    {
    'limit': 10,
    'range': '10-12',
    'class': 'default'
    },
    {
    'limit': 12,
    'range': '12-14',
    'class': 'default'
    },
    {
    'limit': 14,
    'range': '14-16',
    'class': 'default'
    },
    {
    'limit': 16,
    'range': '16-18', 
    'class': 'default'
    },
  ]

  isLoggedIn:boolean

  datePickerConfig: Partial<BsDatepickerConfig>

  constructor(private newRequestService: NewRequestService) {
    console.log(newRequestService.senderAddressId)
    console.log(newRequestService.receiverAddressId)


    this.datePickerConfig = Object.assign({},{ containerClass: 'theme-dark-blue', 
    showWeekNumbers: false,
     minDate: new Date(),
    dateInputFormat: 'DD/MM/YYYY' })

    this.timeRanges.forEach(timeRange => {
      if(this.currentLimit <= timeRange.limit) {
        timeRange.class = 'primary'
      }
    })


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
    this.timeRanges.forEach(timeRange => {
      if(this.currentLimit <= timeRange.limit) {
        timeRange.class = 'primary'
      }
    })
  }

  selectTime(time) {
    this.currentSelectedTime = time
    this.timeRanges.forEach(timeRange => {
      if(time.limit == timeRange.limit) {
        timeRange.class = 'selected'
      } else if(timeRange.class == 'selected') {
        timeRange.class = 'primary'
      }
    })
  }

  showNextProcess(){
    var time = new Time(
      this.dateOfPickUp.toDateString(),
      this.currentSelectedTime.range)
      this.newRequestService.date = this.dateOfPickUp.toDateString()
      this.newRequestService.time = this.currentSelectedTime.range
    this.selectedTime.emit(time)
  }
  
  updateProcess() {
    this.showPreviousProcess.emit('sender-address');
  }

}
