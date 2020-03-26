import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    RegisterComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path:'home', component: HomePageComponent },
        { path:'', redirectTo: 'home', pathMatch: 'full' }
      ]
    )
  ],
  providers:[ 
    NavbarComponent,
    HomePageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
