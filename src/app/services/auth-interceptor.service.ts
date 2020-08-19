import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(
    private authService: AuthService
  ) { }

  intercept(req, next){
    let authRequest = req.clone({
      headers: req.headers.set('Authorization', 'token ' + this.authService.getToken())
    })

    return next.handle(authRequest);
  }

}
