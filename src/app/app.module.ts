import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common';
import { NotifierModule } from "angular-notifier";
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

import { AuthService } from "./services/auth.service";
import { UserService } from "./services/users.service";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ AppComponent, LoginSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NotifierModule.withConfig({
			// Custom options in here
		}),
    RouterModule
  ],
  providers:[ 
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
