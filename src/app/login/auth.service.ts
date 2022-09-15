import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: any;
  public senha: any;

  constructor(private http: HttpClient) {

  }

  authenticationService(username: String, senha: String) {
    return this.http.post(`http://localhost:8080/autenticar`, {
      username: username,
      senha: senha
    }).pipe(map((res:any) =>{
      console.log(res);
      this.senha = res.token
      this.username = res.username
      this.registerSuccessfulLogin(this.username, this.senha);
    }));

  }

  createBasicAuthToken(username: String, senha: String) {
    return 'Basic ' + window.btoa(username + ":" + senha)
  }

  registerSuccessfulLogin(username: String, senha: any) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, senha)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.senha = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}