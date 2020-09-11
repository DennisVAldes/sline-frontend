import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CasesComponent } from './pages/cases/cases.component';

const routes: Routes = [
    {
      path: "",
      component: DashboardComponent,
      children: [
        { path: "", component: CasesComponent },     
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule {}