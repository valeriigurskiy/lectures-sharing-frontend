import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllLecturesComponent } from './all-lectures/all-lectures.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import {RegistrationComponent} from './registration-page/registration-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllUniversitiesComponent } from './all-universities/all-universities.component';
import { SinglePageUniversityComponent } from './single-page-university/single-page-university.component';


const routers = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'lectures', component: AllLecturesComponent
  },
  {
    path: 'register', component: RegistrationComponent
  },
  {
    path: 'users', component: AllUsersComponent
  },
  {
    path: 'login', component: LogInPageComponent
  },
  {
    path: 'universities', component: AllUniversitiesComponent
  },
  {
    path: 'university/:name', component: SinglePageUniversityComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AboutUsComponent,
    AllLecturesComponent,
    AllUsersComponent,
    LogInPageComponent,
    PageNotFoundComponent,
    HomePageComponent,
    AllUniversitiesComponent,
    SinglePageUniversityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
