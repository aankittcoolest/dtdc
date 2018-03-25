import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewRequestService } from '../services/new-request.service';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Output()
  showDashboard = new EventEmitter<String>()

  constructor(private newRequestService: NewRequestService,
    private authService: AuthService,
    private router: Router) {
    const newRequest:any = {
      userId: authService.userId,
      senderAddress: newRequestService.senderAddressId,
      receiverAddress: newRequestService.receiverAddressId,
      date: newRequestService.date,
      time: newRequestService.time
    }

    newRequestService.save(newRequest)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
      
   }

  goToDashboard(componentName) {
    console.log(componentName)
    this.showDashboard.emit(componentName)
  }

  ngOnInit() {
  }

}
