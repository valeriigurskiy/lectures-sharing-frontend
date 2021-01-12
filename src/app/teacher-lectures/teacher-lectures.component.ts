import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeacherLecture} from '../entity/TeacherLecture';
import {Teacher} from '../entity/Teacher';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StarRatingComponent} from 'ng-starrating';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-teacher-lectures',
  templateUrl: './teacher-lectures.component.html',
  styleUrls: ['./teacher-lectures.component.css']
})
export class TeacherLecturesComponent implements OnInit {

  checkedLectures: TeacherLecture[];
  unCheckedLectures: TeacherLecture[];
  hovered = 0;
  readonly = false;
  constructor(private httpClient: HttpClient, private modalService: NgbModal, public translate: TranslateService) {
    this.httpClient.get<TeacherLecture[]>('http://localhost:8080/lectures/teacher/' + sessionStorage.getItem('teacher') + '/unchecked').subscribe(value => this.unCheckedLectures = value);
    this.httpClient.get<TeacherLecture[]>('http://localhost:8080/lectures/teacher/' + sessionStorage.getItem('teacher') + '/checked').subscribe(value => this.checkedLectures = value);

    const lang = localStorage.getItem('lang');
    translate.addLangs(['ru', 'ua']);
    translate.setDefaultLang(lang);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/lang/) ? browserLang : lang);
  }

  rateLecture(id, rate) {
    // @ts-ignore
    this.httpClient.post('http://localhost:8080/lectures/' + id + '/rate/' + rate).subscribe(value => console.log(value));
    console.log(rate);
  }

  ngOnInit(): void {
  }

}
