import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }



  saveUser(login: string, password: string, name: string, lastname: string, age: string, university: string, role: string): void{
    const body = {login, password, name, lastname, age, university, role};
    const req = new HttpRequest('POST', 'http://localhost:8080/users', body);
    this.httpClient.request(req).subscribe(value => console.log(value));

  }

}
