import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginToSite(login: string, password: string){
    const body = {login, password};
    console.log(body.login);
    console.log(body.password);
  }

}
