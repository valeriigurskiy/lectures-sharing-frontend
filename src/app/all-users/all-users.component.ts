import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entity/User';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private httpClient: HttpClient, private title: Title) {
    this.title.setTitle('Users');
  }

  users: User;

  ngOnInit(): void {
    this.httpClient.get<User>('http://localhost:8080/users').subscribe(value => this.users = value);
  }

}
