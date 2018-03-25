import { Component, OnInit } from '@angular/core';
import { RequestHistoryService } from '../services/request-history.service';
import { OrderHistory } from '../order-history'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  displayOrders: Array<OrderHistory> = []

  constructor(requestHistoryService: RequestHistoryService) { 
    requestHistoryService.getOrders()
    .subscribe(
      (response:any) => {
        if(response.result.length > 0) {
          var orders = response.result
          orders.sort((a, b) => b.createdAt - a.createdAt)
          orders = orders.slice(0,5)
          orders.sort((a, b) => a.createdAt - b.createdAt)
          orders.forEach(order => {
            var displayOrder = new OrderHistory(
              order._id, order.senderAddress.landmark,
              order.receiverAddress.landmark,
              order.date,
              order.time
            )
            this.displayOrders.push(displayOrder)
          })
          console.log(this.displayOrders)
        }
      },
      (error) => console.log(error)
    )
  }

  ngOnInit() {
  }

}
