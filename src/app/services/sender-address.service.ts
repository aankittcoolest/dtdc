import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals'
import { AuthService } from './auth/auth.service';

@Injectable()
export class SenderAddressService {

    private path:String = 'sender-addresses'

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  save(address: any) {
    return this.httpClient.post(`${Globals.API_URL}${this.path}`, address, { headers: {'Authorization': `Bearer ${this.authService.token}`}})
  }

  addAddress(id:String, address: any) {
    return this.httpClient.patch(`${Globals.API_URL}${this.path}/add-address/${id}`, address, { headers: {'Authorization': `Bearer ${this.authService.token}`}})
  }

  getAddresses(userId: String) {
    return this.httpClient.get(`${Globals.API_URL}${this.path}/${userId}`, { headers: {'Authorization': `Bearer ${this.authService.token}`}})
  }

}
