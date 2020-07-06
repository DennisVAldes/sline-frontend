import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { CasesComponent } from './pages/cases/cases.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    RegisterComponent,
    MapComponent,
    CasesComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path:'register', component: RegisterComponent },
        { path:'home', component: HomePageComponent },
        { path:'cases', component: CasesComponent },
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
