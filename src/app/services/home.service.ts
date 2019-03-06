import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HomeService{
    http:any;
    baseUrl:String;
    token: any;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'https://mighty-woodland-27266.herokuapp.com/';
    }

    getID(key, token){
        let headers = new Headers({
            'Content-Type' : 'application/json'
        });

        let options = new RequestOptions({ headers: headers, withCredentials: true});

        let data = JSON.stringify({
            email: key,
            password: token
          });

        return this.http.post(this.baseUrl+"api/users/sign_in", data, options)
            .map(res => res.json());
    }

    getURL(){
        return this.baseUrl;
    }

    getToken(key){
        let headers = new Headers({
            'Content-Type' : 'application/json'
        });
        let options = new RequestOptions({ headers: headers, withCredentials: true});
            
        let data = JSON.stringify({
            email: key
        });

        return this.http.post(this.baseUrl+'api/users/send_token', data, options)
                    .map(res => res.json());
    }
}