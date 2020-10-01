import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../services/auth-interceptor.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CasesComponent } from './pages/cases/cases-map-list/cases.component';
import { ListCasesComponent } from './components/list-cases/list-cases.component';
import { MapComponent } from './components/map-cases/map.component';
import { CreateCaseComponent } from './pages/cases/create-case/create-case.component';
import { CaseEditComponent } from './pages/cases/case-edit/case-edit.component';
import { MyCasesComponent } from './pages/cases/my-cases/my-cases.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    CasesComponent,
    ListCasesComponent,
    MapComponent,
    CreateCaseComponent,
    CaseEditComponent,
    MyCasesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
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