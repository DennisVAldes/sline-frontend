import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserDto, ApiResponse } from '../types/dtos/models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiHost = environment.API_ENDPOINT;

  TOKEN_KEY = 'token'

  constructor( private http: HttpClient, private router: Router ) { }

  public getToken = () => localStorage.getItem(this.TOKEN_KEY);

  public isAuthenticated = () => {
    if(localStorage.getItem(this.TOKEN_KEY) !== undefined){
      return !!localStorage.getItem(this.TOKEN_KEY);
    }
  };

  public logout = () => {
    localStorage.removeItem(this.TOKEN_KEY);
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 1000);
  };

  public login = async (newUser: Partial<UserDto>): Promise<ApiResponse<UserDto>> => {
    let res = await this.http
      .post<ApiResponse<UserDto>>(`${this.apiHost}/auth/login`, newUser)
      .toPromise()
      .then((res) => ({...res}));

    localStorage.setItem(this.TOKEN_KEY, (await res).token);
    return res;
  }
                      
}
