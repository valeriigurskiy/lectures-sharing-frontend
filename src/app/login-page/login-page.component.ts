import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {User} from "../Entity/User";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }



  saveUser(login: string, password: string, name: string, lastname: string, age: string, university: string, role: string): void{

    const body = {login, password, name,lastname,age,university, role};

    const req = new HttpRequest('POST', 'http://localhost:8080/users', body);

    this.httpClient.request(req).subscribe(value => console.log(value));

  }

}
