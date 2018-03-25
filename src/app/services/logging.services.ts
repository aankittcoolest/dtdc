import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class LoggingService {

    constructor(private http: HttpClient) {
    }

    logStatusChange(status: string) {
        console.log("Ok")
    }

    test() {
        this.http.get('http://54.149.250.185:3000/user')
        .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        )
        return 
    }
}