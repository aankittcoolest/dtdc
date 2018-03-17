import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../address'
import { Pincode } from '../pincode'
import { SenderAddress } from '../sender-address';

@Component({
  selector: 'app-sender-address',
  templateUrl: './sender-address.component.html',
  styleUrls: ['./sender-address.component.css']
})
export class SenderAddressComponent implements OnInit {

  isAddNewAddress: boolean

  selectedAddress: Address

  @Input()
  senderAddress

  @Output()
  senderAddressChange = new EventEmitter<Address>()

  addresses = new Array()
  address = new Address('', '', '', '', '', 'Uttar Pradesh')

  constructor() {
   }

  ngOnInit() {
  }

  addNewAddress() {
   this.address = new Address('', '', '', '', '', 'Uttar Pradesh')
    this.isAddNewAddress=true
  }

  //save address to DB and show it on addresses
  save(saveAddress) {
    var address = new Address(
      saveAddress.street,
      saveAddress.mainAddress,
      saveAddress.landmark,
      saveAddress.pincode,
      saveAddress.district,
      saveAddress.state
    )
    this.addresses.push(address)
    this.isAddNewAddress=false
  }

  showNextProcess(){
    this.senderAddressChange.emit(this.selectedAddress)
  }

  updateSelectedAddress(address) {
    this.selectedAddress = address
  }

}
