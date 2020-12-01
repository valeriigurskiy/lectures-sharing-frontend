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
import { HeaderComponent } from './header/header.component';
import {AuthguardService} from "./services/authguard.service";
import { LogOutComponent } from './log-out/log-out.component';

const routers = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'lectures', component: AllLecturesComponent, canActivate: [AuthguardService]
  },
  {
    path: 'register', component: RegistrationComponent
  },
  {
    path: 'users', component: AllUsersComponent, canActivate: [AuthguardService]
  },
  {
    path: 'login', component: LogInPageComponent
  },
  {
    path: 'universities', component: AllUniversitiesComponent, canActivate: [AuthguardService]
  },
  {
    path: 'university/:name', component: SinglePageUniversityComponent, canActivate: [AuthguardService]
  },
  { path: 'logout', component: LogOutComponent, canActivate: [AuthguardService] },
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
    SinglePageUniversityComponent,
    HeaderComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
