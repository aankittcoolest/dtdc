import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-receiver-address',
  templateUrl: './receiver-address.component.html',
  styleUrls: ['./receiver-address.component.css']
})
export class ReceiverAddressComponent implements OnInit {

  @Input()
  receiverAddress

  isAddNewAddress: boolean

  selectedAddress: Address

  @Output()
  receiverAddressChange = new EventEmitter<Address>()

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
    this.receiverAddressChange.emit(this.selectedAddress)
  }

  updateSelectedAddress(address) {
    this.selectedAddress = address
  }

}
