import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {TranslateService} from '@ngx-translate/core';
import '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role: string = localStorage.getItem('role');
  constructor(public loginService: AuthenticationService, public translate: TranslateService) {
    const lang = localStorage.getItem('lang');
    translate.addLangs(['ru', 'ua']);
    translate.setDefaultLang(lang);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/lang/) ? browserLang : lang);

  }

  ngOnInit(): void {
  }

  saveLang(lang: string){
    localStorage.setItem('lang', lang);
  }

}


