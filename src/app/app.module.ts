import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllLecturesComponent } from './all-lectures/all-lectures.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import {RegistrationComponent} from './registration-page/registration-page.component';


const routers = [
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AboutUsComponent,
    AllLecturesComponent,
    AllUsersComponent,
    LogInPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
