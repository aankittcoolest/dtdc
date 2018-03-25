import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../address';
import { AuthService } from '../services/auth/auth.service';
import { ReceiverAddressService } from '../services/receiver-address.service';
import { NewRequestService } from '../services/new-request.service';

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

  receiverAddressId: String

  loading:Boolean = true

  @Output()
  receiverAddressChange = new EventEmitter<Address>()

  @Output()
  showPreviousProcess = new EventEmitter<string>()

  addresses = new Array()
  address = new Address('', '', '', '', '', '', 'Uttar Pradesh')


  constructor(private authService: AuthService,
    private receiverAddressService: ReceiverAddressService,
    private newRequestService: NewRequestService ) {
    this.receiverAddressService.getAddresses(authService.userId)
    .subscribe(
      (response:any) => {
        if(response.result.addresses) {
          this.receiverAddressId = response.result._id
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
          })
          this.loading = false
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
    this.isAddNewAddress=true
  }

  //save address to DB and show it on addresses

  save(saveAddress) {
    var receiverAddressPayload = {
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

    console.log(receiverAddressPayload)

    if (this.addresses.length == -1) {
      this.receiverAddressService.save(receiverAddressPayload)
        .subscribe(
          (response:any) => {
            console.log(response)
            this.receiverAddressId = response.result._id
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
      this.receiverAddressService.addAddress(this.receiverAddressId, receiverAddressPayload)
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

  showNextProcess(){
    this.newRequestService.receiverAddressId = this.selectedAddress._id
    this.receiverAddressChange.emit(this.selectedAddress)
  }

  updateProcess() {
    this.showPreviousProcess.emit('sender-address');
  }

  updateSelectedAddress(address) {
    console.log(address)
    this.selectedAddress = address
  }

}
