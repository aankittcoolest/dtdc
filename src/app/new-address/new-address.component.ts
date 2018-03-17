import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../address'
import { Pincode } from '../pincode'

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css']
})
export class NewAddressComponent implements OnInit {

  pincodes :Pincode[] = [
      { pincode: 281001, district: 'Mathura'},
      { pincode: 281002, district: 'Virindavan'},
      ]

  selectedPincode=281001

  @Input()
  isAddNewAddress

  @Output()
  isAddNewAddressChange = new EventEmitter<boolean>()

  @Input()
  address

  @Output()
  saveAddress = new EventEmitter<Address>();

  addresses = new Array()

  constructor() {
   }

  ngOnInit() {
  }

  closeAddressModal(){
    this.isAddNewAddressChange.emit(false)
  }

  //save address to DB and show it on addresses
  save() {
    this.saveAddress.emit(this.address)
  }

}
