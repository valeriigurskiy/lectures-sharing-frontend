import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UniversitySharing';

  constructor(private httpClient: HttpClient){
    this.httpClient.get<any>('http://localhost:8080/users').subscribe(value => console.log(value));
  }

}
