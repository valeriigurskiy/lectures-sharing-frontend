import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {User} from '../entity/User';
import {University} from '../entity/University';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from "@angular/platform-browser";
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

  constructor(private httpClient: HttpClient, private title: Title) {
    this.title.setTitle('Registration');
  }

  validatingForm: FormGroup;

  universities: University;
  value: University;

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
      lastname: new FormControl(),
      age: new FormControl()
    });
    this.httpClient.get<University>('http://localhost:8080/university').subscribe(value => this.universities = value);
  }

  saveUser(login: string, password: string, name: string, lastname: string, age: string, role: string): void{
    const university = this.value.name;
    const body = {login, password, name, lastname, age, university, role};
    const req = new HttpRequest('POST', 'http://localhost:8080/users', body);
    this.httpClient.request(req).subscribe(value => console.log(value));
    console.log(university);
  }

}
