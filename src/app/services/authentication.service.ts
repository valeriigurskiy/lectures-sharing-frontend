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

  authenticate(username, password) {
    this.users.forEach(value => {
      if (value.login === username && value.password === password) {
        sessionStorage.setItem('username', username);
        this.result = true;
      } else {
        this.result = false;
      }
    });
    return this.result;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }

}
