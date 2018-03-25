import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable, EventEmitter } from '@angular/core';
import { Globals } from '../../globals';

@Injectable()
export class AuthService {

    private path:String = 'user'
    private globals = Globals
    token:String
    isAuthenticated:Boolean = false
    
    email: String
    userId: String

    currentTab:String = 'signUp'

    currentTabUpdated = new EventEmitter()

    setCurrentTab(tabName) {
        this.currentTab = tabName
        this.currentTabUpdated.emit(this.currentTab)
    }

    constructor(private httpClient: HttpClient) {
        if(localStorage.getItem('isAuthenticated') === 'true') {
            this.token = localStorage.getItem('token')
        }
    }

    getUserInfo() {
        return this.httpClient.get(`${this.globals.API_URL}${this.path}/`, { headers: {'Authorization': `Bearer ${this.token}`}})
    }

    logout() {
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('token')
        this.isAuthenticated=false
        this.token = ''
    }

    updateToken() {

    }

    public login(credentials : any) {
        return this.httpClient.post(`${this.globals.API_URL}${this.path}/login`, credentials)
    }

    signup(user: any) {
        this.httpClient.post(`${this.globals.API_URL}${this.path}/signup`, user)
        .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        )

    }

}