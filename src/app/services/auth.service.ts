import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserDto, ApiResponse } from '../types/dtos/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiHost = environment.API_ENDPOINT;

  constructor( private http: HttpClient ) { }

  public login = async (newUser: Partial<UserDto>): Promise<ApiResponse<UserDto>> => {
    let res = await this.http
      .post<ApiResponse<UserDto>>(`${this.apiHost}/auth/login`, newUser)
      .toPromise()
      .then((res) => ({...res}));

    localStorage.setItem('token', (await res).token);

    return res;
  }
                      
}
