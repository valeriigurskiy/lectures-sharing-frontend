import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entity/User';
import {Title} from "@angular/platform-browser";
import {HttpclientService} from "../services/httpclient.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private httpClient: HttpClient, private httpClientService: HttpclientService, private title: Title) {
    this.title.setTitle('Users');
  }

  users: User[];

  ngOnInit(): void {
    this.httpClientService.getUsers().subscribe(value => this.users = value);
  }

}
