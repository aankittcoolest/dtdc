import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  @Input()
  addressList:any

  @Output()
  selectedAddress = new EventEmitter<Address>()

  currentSelectedAddress

  constructor() { }

  ngOnInit() {
  }

  updateSelectedAddress(address) {
    this.currentSelectedAddress = address
    this.selectedAddress.emit(address)
  }

}
