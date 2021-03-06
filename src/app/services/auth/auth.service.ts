import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserDto, ApiResponse } from '../../types/dtos/models';
import { userProfile } from '../../types/enums';
import { Router } from '@angular/router';
import JwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  private apiHost = environment.API_ENDPOINT;

  TOKEN_KEY = 'token'

  constructor( 
    private http: HttpClient,
    private router: Router
  ) { }

  public getToken = () => localStorage.getItem(this.TOKEN_KEY);

  public isAuthenticated = () => {
    if(localStorage.getItem('isLogged') !== 'false'){
      return !!localStorage.getItem(this.TOKEN_KEY);
    }
  };

  public logout = () => {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('userData');
    localStorage.setItem("isLogged", "false");

    this.router.navigateByUrl('/login');
  };

  public login = async (newUser: Partial<UserDto>): Promise<ApiResponse<UserDto>> => {
    let res = await this.http
      .post<ApiResponse<UserDto>>(`${this.apiHost}/auth/login`, newUser)
      .toPromise()
      .then((_res) => ({..._res}));
    
    if(res.token){
      var token = res.token;
      var decoded: any = await JwtDecode(token);

      decoded.image_url === undefined ? decoded.image_url = userProfile(decoded.sexo) : decoded.image_url = decoded.image_url;
      
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('userData', JSON.stringify(decoded));
      localStorage.setItem(this.TOKEN_KEY, res.token);
    }
    
    return res;
  }
                      
}
