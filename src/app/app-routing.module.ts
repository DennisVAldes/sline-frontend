import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CasesComponent } from './pages/cases/cases.component';
import { UsersComponent } from './pages/users/users.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NoAuthGuard } from './services/no-auth-guard.service';

const routes: Routes = [
  { path:'info', component: InfoPageComponent, canActivate: [NoAuthGuard] },
  { path:'login', component: HomePageComponent },
  { path:'cases', component: CasesComponent, canActivate: [NoAuthGuard] },
  { path:'users', component: UsersComponent, canActivate: [NoAuthGuard] },
  { path:'', redirectTo: 'login', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
