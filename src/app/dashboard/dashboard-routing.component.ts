import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CasesComponent } from './pages/cases/cases-map-list/cases.component';
import { CreateCaseComponent } from './pages/cases/create-case/create-case.component';
import { CaseEditComponent } from './pages/cases/case-edit/case-edit.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

const routes: Routes = [
    {
      path: "",
      component: DashboardComponent,
      children: [
        { path: 'cases', component: CasesComponent },
        { path: 'cases/:id', component: CreateCaseComponent },
        { path: 'create-case', component: CreateCaseComponent },
        { path: 'my-profile', component: MyProfileComponent },
        { path: '', redirectTo: 'cases', pathMatch: 'full' }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule {}