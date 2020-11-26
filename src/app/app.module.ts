import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule} from "@angular/forms";
import { AboutUsComponent } from './about-us/about-us.component';
import {RouterModule} from "@angular/router";
import { AllLecturesComponent } from './all-lectures/all-lectures.component';

const routers = [
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'lectures', component: AllLecturesComponent
  },
  {
    path: 'login', component: LoginPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AboutUsComponent,
    AllLecturesComponent
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
