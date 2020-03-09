import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MarkersComponent } from './home-page/markers/markers.component';
import { EventEmitterService } from './event-emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    MarkersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers:[ 
    NavbarComponent,
    HomePageComponent,
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
