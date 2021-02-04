import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {UserEntity} from '../entity/UserEntity';
import {University} from '../entity/University';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {HttpclientService} from '../services/httpclient.service';
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

  constructor(private httpclientService: HttpclientService, private httpClient: HttpClient, private title: Title, private formBuilder: FormBuilder, private router: Router, private translate: TranslateService) {
    const lang = localStorage.getItem('lang');
    translate.addLangs(['ru', 'ua']);
    translate.setDefaultLang(lang);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/lang/) ? browserLang : lang);
    this.title.setTitle('Registration');
    this.httpclientService.getUsers().subscribe(value => this.users = value);
  }

  users: any;
  myGroup: FormGroup;
  universities: University;
  value: University;
  userExistInDB: boolean;
  active = 'user';

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
  }

  passwordTrigger(event): void {
    if (event.type === 'password') {
      event.type = 'text';
    } else {
      event.type = 'password';
    }
  }

  saveUser(login: string, password: string, name: string, lastname: string, age: string, university: string, role: string): void {
    if (age > '30') {
      age = '30';
    }

    const body = {login, password, name, lastname, age, university, role};
    const req = new HttpRequest('POST', 'http://localhost:8080/users', body);
    this.httpClient.request(req).subscribe();
    this.router.navigate(['login']);
  }

  saveTeacher(name: string, lastname: string, login: string, password: string, age: number, university){
    const universityname = sessionStorage.getItem('university');
    const body = {name, lastname, login, password, age, university, universityname};
    console.log(body);
    const req = new HttpRequest('POST', 'http://localhost:8080/teachers', body);
    this.httpClient.request(req).subscribe();
    this.router.navigate(['login']);
  }

  onLoginChange(login: string) {
    this.httpClient.get<any>('http://localhost:8080/users/user/' + login).subscribe(user => {
      this.userExistInDB = user.length !== 0;
    });
  }
}

