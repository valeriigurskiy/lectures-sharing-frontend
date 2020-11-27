import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {User} from '../entity/User';
import {University} from "../entity/University";
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private httpClient: HttpClient) {

  }

  universities: University;

  ngOnInit(): void {
    this.httpClient.get<University>('http://localhost:8080/university').subscribe(value => this.universities = value);
  }

  saveUser(login: string, password: string, name: string, lastname: string, age: string, university: string, role: string): void{
    const body = {login, password, name, lastname, age, university, role};
    const req = new HttpRequest('POST', 'http://localhost:8080/users', body);
    this.httpClient.request(req).subscribe(value => console.log(value));
  }

}
