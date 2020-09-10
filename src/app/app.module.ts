import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common';
import { NotifierModule } from "angular-notifier";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MapComponent } from './components/map/map.component';
import { CasesComponent } from './pages/cases/cases.component';
import { UsersComponent } from './pages/users/users.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';

import { AuthService } from "./services/auth.service";
import { UserService } from "./services/users.service";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { CreateCaseComponent } from './components/create-case/create-case.component';
import { DashboardComponent } from './dashboard/dashboard.component';2

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    MapComponent,
    CasesComponent,
    UsersComponent,
    InfoPageComponent,
    PageNotFoundComponent,
    LoginSignupComponent,
    CreateCaseComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NotifierModule
  ],
  providers:[ 
    NavbarComponent,
    HomePageComponent,
    DatePipe,
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
