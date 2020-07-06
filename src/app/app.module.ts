import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

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
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    MapComponent,
    CasesComponent,
    UsersComponent,
    InfoPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path:'info', component: InfoPageComponent },
        { path:'home', component: HomePageComponent },
        { path:'cases', component: CasesComponent },
        { path:'users', component: UsersComponent },
        { path:'', redirectTo: 'info', pathMatch: 'full' }
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
