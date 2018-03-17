import { SenderAddress } from "./sender-address";
import { Address } from "./address";
import { Time } from "./time";

export class RequestBox {
    senderAddress: Address
    receiverAddress: Address
    time: Time

    constructor(senderAddress, receiverAddress, time) {
        this.senderAddress = senderAddress
        this.receiverAddress = receiverAddress
        this.time = time
    }
}
