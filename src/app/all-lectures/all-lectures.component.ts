import {Component, OnInit, PipeTransform} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Lecture} from '../entity/Lecture';
import {Router} from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Teacher} from "../entity/Teacher";
import {AuthenticationService} from "../services/authentication.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-all-lectures',
  templateUrl: './all-lectures.component.html',
  styleUrls: ['./all-lectures.component.css']
})
export class AllLecturesComponent implements OnInit {

  lectures: Lecture[];
  teachers: Teacher;
  value: Teacher;

  constructor(private httpClient: HttpClient, private router: Router, private modalService: NgbModal, private translate: TranslateService) {
    this.httpClient.get<Lecture[]>('http://localhost:8080/university/' + sessionStorage.getItem('university') + '/lectures').subscribe(value => this.lectures = value);

    const lang = localStorage.getItem('lang');

    translate.addLangs(['ru', 'ua']);
    translate.setDefaultLang(localStorage.getItem('lang'));
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/lang/) ? browserLang : lang);
  }

  toLecture(id) {
    this.router.navigate(['lecture' , id], {state: {id}});
  }

  openModal(content){
    this.modalService.open(content, { centered: true });
    this.httpClient.get<Teacher>('http://localhost:8080/university/' + sessionStorage.getItem('university') + '/teachers').subscribe(value => this.teachers = value);
  }

  addLecture(description, name, title, teacher){
    const university = sessionStorage.getItem('university');
    const user = sessionStorage.getItem('user');
    const body = {name, title, description, university, teacher, user};
    console.log(body);
    const req = new HttpRequest('POST', 'http://localhost:8080/lectures', body);
    this.httpClient.request(req).subscribe();
  }

  ngOnInit(): void {
  }
}
