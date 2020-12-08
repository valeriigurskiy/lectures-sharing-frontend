import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entity/User';
import {HttpclientService} from './httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: User[];
  result: boolean;
  constructor(private httpClientService: HttpclientService) {
    this.httpClientService.getUsers().subscribe(value => this.users = value);
  }

  authenticate(login, password) {
    this.users.forEach(user => {
      if (user.login === login && user.password === password) {
        sessionStorage.setItem('login', login);
        this.result = true;
      } else {
        this.result = false;
      }
    });
    return this.result;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('login');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('login');
  }

}
