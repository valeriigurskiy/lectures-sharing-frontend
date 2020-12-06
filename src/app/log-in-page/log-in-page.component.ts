import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from "@ngx-translate/core";
// import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  constructor(private title: Title, private router: Router, private loginService: AuthenticationService, private translate: TranslateService) {
    const lang = localStorage.getItem('lang');

    translate.addLangs(['ru', 'ua']);
    translate.setDefaultLang(localStorage.getItem('lang'));
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/lang/) ? browserLang : lang);
    this.title.setTitle('Login');
  }

  login: '';
  password: '';
  myGroup: FormGroup;
  invalidLogin = false;

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      login: new FormControl('', Validators.minLength(4)),
      password: new FormControl('', Validators.minLength(6))
    });
  }

  checkLogin() {
    if (this.loginService.authenticate(this.login, this.password)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
