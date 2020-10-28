import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../services/auth/auth-interceptor.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CasesComponent } from './pages/cases/cases-map-list/cases.component';
import { ListCasesComponent } from './components/list-cases/list-cases.component';
import { MapComponent } from './components/map-cases/map.component';
import { CreateCaseComponent } from './pages/cases/create-case/create-case.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    CasesComponent,
    ListCasesComponent,
    MapComponent,
    CreateCaseComponent,
    MyProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  providers: [
    NgModel,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    },
  ]
})
export class DashboardModule {}