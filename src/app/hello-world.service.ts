import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message';
@Injectable({
  providedIn: 'root'
})
export class HelloWordService {
  
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  
  constructor(private http: HttpClient) { }
 
  headers:HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `${this.getToken()}`
  });


  helloWorldService() {
    return this.http.get<any>('http://localhost:8080/usuario', {headers: this.headers });
  }

  getToken() {
    let token = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (token === null) return ''
    return token
  }

}