import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Lecture} from '../entity/Lecture';

@Component({
  selector: 'app-single-lecture',
  templateUrl: './single-lecture.component.html',
  styleUrls: ['./single-lecture.component.css']
})
export class SingleLectureComponent implements OnInit {
  id: number;
  lecture: Lecture;
  loaded: boolean;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.httpClient.get<Lecture>('http://localhost:8080/lectures/' + this.id)
      .subscribe(value => {
        this.lecture = value;
        this.loaded = true;
      });
  }

  ngOnInit(): void {
  }

}
