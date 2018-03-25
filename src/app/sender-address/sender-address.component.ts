import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../address'
import { Pincode } from '../pincode'
import { SenderAddress } from '../sender-address';
import { AuthService } from '../services/auth/auth.service';
import { SenderAddressService } from '../services/sender-address.service';
import { NewRequestService } from '../services/new-request.service';

@Component({
  selector: 'app-sender-address',
  templateUrl: './sender-address.component.html',
  styleUrls: ['./sender-address.component.css']
})
export class SenderAddressComponent implements OnInit {

  isAddNewAddress: boolean

  selectedAddress: Address

  senderAddressId: String

  loading:Boolean = true

  @Input()
  senderAddress

  @Output()
  senderAddressChange = new EventEmitter<Address>()

  @Output()
  showDashboard = new EventEmitter<String>()

  addresses = new Array()
  address = new Address('', '', '', '', '', '', 'Uttar Pradesh')

  constructor(private authService: AuthService,
    private senderAddressService: SenderAddressService,
  private newRequestService: NewRequestService) {
    this.senderAddressService.getAddresses(authService.userId)
    .subscribe(
      (response:any) => {
        if(response.result.addresses) {
          this.senderAddressId = response.result._id
          var addresses = response.result.addresses
          addresses.forEach(addressMap => {
            var address = addressMap.address
              var populateAddress = new Address(
              address._id,
              address.street,
              address.mainAddress,
              address.landmark,
              address.pincode,
              address.district,
              address.state
            )
            this.addresses.push(populateAddress)
          this.loading = false
          })
        } else {
          this.loading = false
        }
      },
      (error) => console.log(error)
    )
  }

  ngOnInit() {
  }

  addNewAddress() {
    this.address = new Address('', '', '', '', '', '', 'Uttar Pradesh')
    this.isAddNewAddress = true
  }

  //save address to DB and show it on addresses
  save(saveAddress) {
    var senderAddressPayload = {
      userId: this.authService.userId,
      address: {
        street: saveAddress.street,
        mainAddress: saveAddress.mainAddress,
        landmark: saveAddress.landmark,
        pincode: saveAddress.pincode,
        district: saveAddress.district,
        state: saveAddress.district,
        country: saveAddress.country
      }
    }

    console.log(senderAddressPayload)

    if (this.addresses.length == -1) {
      console.log("inside save")
      this.senderAddressService.save(senderAddressPayload)
        .subscribe(
          (response:any) => {
            if(response.addressResult) {
              var address = new Address(
              response.addressResult._id,
              response.addressResult.street,
              response.addressResult.mainAddress,
              response.addressResult.landmark,
              response.addressResult.pincode,
              response.addressResult.district,
              response.addressResult.state
            )
            this.addresses.push(address)

            }
            //hide address modal
            this.isAddNewAddress = false
          },
          (error) => console.log(error)
        )
    }

    else {
      //add address
      this.senderAddressService.addAddress(this.senderAddressId, senderAddressPayload)
        .subscribe(
          (response:any) => {
            var address = new Address(
              response.addressResult._id,
              response.addressResult.street,
              response.addressResult.mainAddress,
              response.addressResult.landmark,
              response.addressResult.pincode,
              response.addressResult.district,
              response.addressResult.state
            )
            this.addresses.push(address)
            //hide address modal
            this.isAddNewAddress = false
          },
          (error) => console.log(error)
        )
    }
  }

  showNextProcess() {
    this.newRequestService.senderAddressId = this.selectedAddress._id
    this.senderAddressChange.emit(this.selectedAddress)
  }

  updateSelectedAddress(address) {
    this.selectedAddress = address
  }

  goToDashboard(componentName) {
    console.log(componentName)
    this.showDashboard.emit(componentName)
  }

}
