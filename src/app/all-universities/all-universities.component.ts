import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {University} from '../entity/University';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-universities',
  templateUrl: './all-universities.component.html',
  styleUrls: ['./all-universities.component.css']
})
export class AllUniversitiesComponent implements OnInit {

  universities: University;

  ngOnInit(): void {
  }

  constructor(private httpClient: HttpClient, private title: Title, private router: Router) {
    this.httpClient.get<University>('http://localhost:8080/university').subscribe(value => this.universities = value);
    this.title.setTitle('Universities');
  }

  // tslint:disable-next-line:typedef
  toUniversity(id: number): void{
    console.log(id);
    this.router.navigate(['university', id], {state: {id}});
  }



}
