import { Component, OnInit } from '@angular/core';
import { RequestBox } from '../request-box';
import { SenderAddress } from '../sender-address';
import { Address } from '../address';
import { Time } from '../time';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  senderAddress = new Address('', '' ,'','','','')
  receiverAddress = new Address('', '' ,'','','','')
  time = new Time('', '');
  requestBox = new RequestBox(this.senderAddress, this.receiverAddress, this.time)

  currentProcess: String = "sender-address"

  constructor() { }

  ngOnInit() {
  }

  updateSenderAddress(address) {
    this.senderAddress = address
    this.requestBox.senderAddress = this.senderAddress
    this.showNextProcess('receiver-address')
  }

  updateReceiverAddress(address) {
    console.log("I am coming from receiver");
    
    console.log(address);
    this.receiverAddress = address
    this.requestBox.receiverAddress = this.receiverAddress
    this.showNextProcess('select-time')
  }

  updateTime(time) {
    this.time = time
    this.requestBox.time = this.time
    this.showNextProcess('confirm')
  }

  showNextProcess(process) {
    this.currentProcess = process
  }

}
