import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Globals } from "../globals";
import { AuthService } from "./auth/auth.service";

@Injectable()
export class RequestHistoryService {

    path:String = 'request-history'

    constructor(private httpClient: HttpClient, private authService: AuthService) {
    }

     getOrders() {
        return this.httpClient.get(`${Globals.API_URL}${this.path}/${this.authService.userId}`, { headers: {'Authorization': `Bearer ${this.authService.token}`}})


    }

}