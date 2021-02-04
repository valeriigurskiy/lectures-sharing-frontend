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

  images: any[] = [
    {name: 'Кингстонский Университет', image: 'https://imgclf.112.ua/original/2020/07/17/429558.jpg?timestamp=1594957840'},
    {name: 'Университет Осло', image: 'https://imgclf.112.ua/original/2020/07/17/429558.jpg?timestamp=1594957840'},
    {name: 'Университет имени Тараса Шевченка', image: 'https://imgclf.112.ua/original/2020/07/17/429558.jpg?timestamp=1594957840'},
  ];

  constructor(private title: Title, private httpClient: HttpClient) {
    this.title.setTitle('Home');
    if (!localStorage.getItem('role')){
      localStorage.setItem('role', 'guess');
    }
  }

  ngOnInit(): void {
  }

}
