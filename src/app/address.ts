export class Address {
     street: string;
     mainAddress: string;
     landmark: string;
     pincode: string;
     district: string;
     state: string;

    constructor(street, mainAddress, landmark, pincode, district, state) {
        this.street = street
        this.mainAddress = mainAddress
        this.landmark = landmark
        this.pincode = pincode
        this.district = district
        this.state = state
    }
}
