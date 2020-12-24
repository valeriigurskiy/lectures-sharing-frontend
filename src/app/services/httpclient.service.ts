import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserEntity} from "../entity/UserEntity";
import {Teacher} from "../entity/Teacher";

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
    return this.httpClient.get<UserEntity[]>('http://localhost:8080/users', {headers});
  }

  public getTeachers() {
    const basicString = this.getHeaders();

    const headers = new HttpHeaders(
      {Authorization: basicString}
    );
    return this.httpClient.get<Teacher[]>('http://localhost:8080/teachers', {headers});
  }

  public deleteUser(user) {
    return this.httpClient.delete<UserEntity>('http://localhost:8080/users' + '/' + user.id);
  }
  public createUser(user) {
    return this.httpClient.post<UserEntity>('http://localhost:8080/users', user);
  }

  getHeaders(){
    const username = 'admin';
    const password = 'password';

    const  basicString = 'Basic ' + window.btoa(username + ':' + password);
    return basicString;
  }




}
