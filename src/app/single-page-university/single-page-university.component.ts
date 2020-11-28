import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {University} from '../entity/University';
import {HttpClient} from '@angular/common/http';
import {User} from "../entity/User";

@Component({
  selector: 'app-single-page-university',
  templateUrl: './single-page-university.component.html',
  styleUrls: ['./single-page-university.component.css']
})
export class SinglePageUniversityComponent implements OnInit {

  university: University;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe(id => {
      this.httpClient.get<University>('http://localhost:8080/university/' + id.name).subscribe(value => this.university = value);
    });
  }

  ngOnInit(): void {
  }

}
