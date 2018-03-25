import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Globals } from "../globals";
import { AuthService } from "./auth/auth.service";


@Injectable()
export class NewRequestService {

    senderAddressId:String
    receiverAddressId:String
    date:String
    time:String

    path:String = 'request-history'

    constructor(private httpClient: HttpClient, private authService: AuthService) {
    }

    save(newRequest:any) {
        return this.httpClient.post(`${Globals.API_URL}${this.path}`,
         newRequest,
         { headers: {'Authorization': `Bearer ${this.authService.token}`}})
    }

}