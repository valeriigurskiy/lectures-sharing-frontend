import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {University} from '../entity/University';
import {Teacher} from "../entity/Teacher";

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  university: University;
  teachers: Teacher[];
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<University>('http://localhost:8080/university/name/' + sessionStorage.getItem('university')).subscribe(value => this.university = value);
    this.httpClient.get<Teacher[]>('http://localhost:8080/university/' + sessionStorage.getItem('university') + '/teachers').subscribe(value => this.teachers = value);
  }

  ngOnInit(): void {
  }

}
