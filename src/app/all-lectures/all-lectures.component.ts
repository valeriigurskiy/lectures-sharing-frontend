import {Component, OnInit, PipeTransform} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Lecture} from '../entity/Lecture';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-lectures',
  templateUrl: './all-lectures.component.html',
  styleUrls: ['./all-lectures.component.css']
})
export class AllLecturesComponent implements OnInit {

  lectures: Lecture[];

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient.get<Lecture[]>('http://localhost:8080/lectures').subscribe(value => this.lectures = value);
  }

  toLecture(id) {
    this.router.navigate(['lecture' , id], {state: {id}});
  }

  ngOnInit(): void {
  }
}
