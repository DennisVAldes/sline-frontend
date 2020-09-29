import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CasesComponent } from './pages/cases/cases.component';
import { CreateCaseComponent } from './pages/create-case/create-case.component';
import { CaseDetailComponent } from './pages/case-detail/case-detail.component';

const routes: Routes = [
    {
      path: "",
      component: DashboardComponent,
      children: [
        { path: 'cases', component: CasesComponent },
        { path: 'cases/:id', component: CaseDetailComponent},
        { path: 'create-case', component: CreateCaseComponent },
        { path: '', redirectTo: 'cases', pathMatch: 'full' }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule {}