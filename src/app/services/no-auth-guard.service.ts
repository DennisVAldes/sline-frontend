import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'


@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private routerService: Router
  ) { }
  
  isAuthenticated(): boolean{
    if (this.authService.isAuthenticated()) {
      return true;
    } else if (!this.authService.isAuthenticated()){
      return false;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      this.routerService.navigate(['/cases'], {
        queryParams: {
          return: state.url
        }
      });
      return true;
    } else if (!this.authService.isAuthenticated()){
      this.routerService.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
