import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllLecturesComponent } from './all-lectures/all-lectures.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
import {AuthguardService} from './services/authguard.service';
import { LogOutComponent } from './log-out/log-out.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { UniversityComponent } from './university/university.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SingleLectureComponent } from './single-lecture/single-lecture.component';

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
    path: 'lectures', component: AllLecturesComponent, canActivate: [AuthguardService]
  },
  {
    path: 'lecture/:id', component: SingleLectureComponent, canActivate: [AuthguardService]
  },
  {
    path: 'teachers', component: TeachersComponent, canActivate: [AuthguardService]
  },
  // {
  //   path: 'universities', component: AllUniversitiesComponent, canActivate: [AuthguardService]
  // },
  // {
  //   path: 'university', component: UniversityComponent, canActivate: [AuthguardService]
  // },
  // {
  //   path: 'university/:name', component: SinglePageUniversityComponent, canActivate: [AuthguardService]
  // },
  { path: 'logout', component: LogOutComponent, canActivate: [AuthguardService] },
  {
    path: '**', component: PageNotFoundComponent
  }
  ];

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

// @ts-ignore
// @ts-ignore
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
    LogOutComponent,
    UniversityComponent,
    TeachersComponent,
    SingleLectureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
