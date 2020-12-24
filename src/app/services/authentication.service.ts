import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpclientService} from './httpclient.service';
import {Teacher} from '../entity/Teacher';
import {UserEntity} from '../entity/UserEntity';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: UserEntity[];
  teachers: Teacher[];
  result: boolean;
  constructor(private httpClientService: HttpclientService) {
    this.httpClientService.getUsers().subscribe(value => this.users = value);
    this.httpClientService.getTeachers().subscribe(value => this.teachers = value);
  }

  authenticateUser(login, password) {
    this.users.forEach(user => {
      if (user.login === login && user.password === password) {
        sessionStorage.setItem('login', login);
        sessionStorage.setItem('university', user.university);
        this.result = true;
      } else {
        this.result = false;
      }
    });
    return this.result;
  }

  authenticateTeacher(login, password) {
    this.teachers.forEach(teacher => {
      if (teacher.login === login && teacher.password === password) {
        this.result = true;
        sessionStorage.setItem('login', login);
        sessionStorage.setItem('university', teacher.university);
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
