import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../entity/User";

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    const basicString = this.getHeaders();

    const headers = new HttpHeaders(
      {Authorization: basicString}
    );
    return this.httpClient.get<User[]>('http://localhost:8080/users', {headers});
  }
  public deleteUser(user) {
    return this.httpClient.delete<User>('http://localhost:8080/users' + '/' + user.id);
  }
  public createUser(user) {
    return this.httpClient.post<User>('http://localhost:8080/users', user);
  }

  getHeaders(){
    const username = 'admin';
    const password = 'password';

    const  basicString = 'Basic ' + window.btoa(username + ':' + password);
    return basicString;
  }




}
