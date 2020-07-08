import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { CasesComponent } from './pages/cases/cases.component';
import { UsersComponent } from './pages/users/users.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DatePipe } from '@angular/common';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path:'info', component: InfoPageComponent },
        { path:'home', component: HomePageComponent },
        { path:'cases', component: CasesComponent },
        { path:'users', component: UsersComponent },
        { path:'PageNotFound', component: PageNotFoundComponent },
        { path:'', redirectTo: 'home', pathMatch: 'full' }
      ]
    )
  ],
  providers:[ 
    NavbarComponent,
    HomePageComponent,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
