import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {University} from '../entity/University';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  universities: University;

  constructor(private title: Title, private httpClient: HttpClient) {
    this.title.setTitle('Home');
  }

  ngOnInit(): void {
  }

}
