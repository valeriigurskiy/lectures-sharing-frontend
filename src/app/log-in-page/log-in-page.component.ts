import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {HttpclientService} from '../services/httpclient.service';
// import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {
  active = 1;

  constructor(private title: Title, private router: Router, private loginService: AuthenticationService, private translate: TranslateService, private httpClientService: HttpclientService) {
    const lang = localStorage.getItem('lang');

    translate.addLangs(['ru', 'ua']);
    translate.setDefaultLang(localStorage.getItem('lang'));
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/lang/) ? browserLang : lang);
    this.title.setTitle('Login');
  }

  userLogin: '';
  teacherLogin: '';
  userPassword: '';
  teacherPassword: '';
  myGroup: FormGroup;
  invalidLogin = false;

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      userLogin: new FormControl('', Validators.minLength(4)),
      userPassword: new FormControl('', Validators.minLength(6)),
      teacherLogin: new FormControl('', Validators.minLength(4)),
      teacherPassword: new FormControl('', Validators.minLength(6))
    });
  }

  clearInputs(){
    this.userLogin = '';
    this.userPassword = '';
    this.teacherLogin = '';
    this.teacherPassword = '';
  }

  checkTeacherLogin(): void {
    if (this.loginService.authenticateTeacher(this.teacherLogin, this.teacherPassword)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  checkUserLogin(): void {
    if (this.loginService.authenticateUser(this.userLogin, this.userPassword)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
