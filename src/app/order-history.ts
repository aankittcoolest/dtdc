export class OrderHistory {
    _id:String
    origin: String
    destination: String
    date: String
    time: String

    constructor(_id, origin, destination, date, time) {
        this._id = _id
        this.origin = origin
        this.destination = destination
        this.date = date
        this.time = time
    }
}
