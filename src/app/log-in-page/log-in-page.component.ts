import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Login');
  }

  ngOnInit(): void {
  }

  loginToSite(login: string, password: string){
    const body = {login, password};
    console.log(body.login);
    console.log(body.password);
  }

}
