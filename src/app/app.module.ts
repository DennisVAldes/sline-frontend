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

import { AuthService } from "./services/auth/auth.service";
import { UserService } from "./services/users.service";
import { AuthInterceptorService } from "./services/auth/auth-interceptor.service";
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from './services/loader/loader.service';
import { LoaderInterceptor } from './services/loader/loader.interceptor';

import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ 
    AppComponent, 
    LoginSignupComponent,
    LoaderComponent,
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
    RouterModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers:[ 
    DatePipe,
    AuthService,
    UserService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
