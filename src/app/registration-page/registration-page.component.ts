import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {User} from '../entity/User';
import {University} from '../entity/University';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
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

  constructor(private httpClient: HttpClient, private title: Title, private formBuilder: FormBuilder) {
    this.title.setTitle('Registration');
  }

  user: User;
  myGroup: FormGroup;
  profileForm: FormGroup;
  universities: University;
  value: University;
  passwordValue: boolean;
  buttonStatus: true;
  dateObj = new Date();

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      login: new FormControl('', Validators.minLength(4)),
      password: new FormControl('', Validators.minLength(6)),
      name: new FormControl('', Validators.minLength(2)),
      lastname: new FormControl('', Validators.minLength(2)),
      age: new FormControl('', Validators.min(16)),
      university: new FormControl('', Validators.required)
    });

    this.httpClient.get<University>('http://localhost:8080/university').subscribe(value => this.universities = value);
    console.log(this.value);
  }

  passwordTrigger(event): void{
    if (event.type === 'password'){
      event.type = 'text';
    } else{
      event.type = 'password';
    }
  }

  saveUser(login: string, password: string, name: string, lastname: string, age: string, university: string, role: string): void{
    if (age > '30'){
      age = '30';
    }

    const body = {login, password, name, lastname, age, university, role};
    const req = new HttpRequest('POST', 'http://localhost:8080/users', body);
    this.httpClient.request(req).subscribe(value => console.log(value));
  }
}

