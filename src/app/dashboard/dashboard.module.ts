import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../services/auth-interceptor.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CasesComponent } from './pages/cases/cases.component';
import { ListCasesComponent } from './components/list-cases/list-cases.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    CasesComponent,
    ListCasesComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    },
  ]
})
export class DashboardModule {}