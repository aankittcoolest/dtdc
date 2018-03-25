export class Address {
    _id: String
     street: string
     mainAddress: string
     landmark: string
     pincode: string
     district: string
     state: string

    constructor(_id, street, mainAddress, landmark, pincode, district, state) {
        this._id = _id
        this.street = street
        this.mainAddress = mainAddress
        this.landmark = landmark
        this.pincode = pincode
        this.district = district
        this.state = state
    }
}
