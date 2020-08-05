import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserDto, ApiResponse } from '../types/dtos/models';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  private apiHost = environment.API_ENDPOINT;

  constructor( private http: HttpClient ) { }

  public login = (user: Partial<UserDto>) => {
    
    const params = new HttpParams()
    .set('email', user.email)
    .set('password', user.password);

    async(): Promise<ApiResponse<UserDto[]>> => 
        this.http
            .get<ApiResponse<UserDto[]>>(`${this.apiHost}/login/`, {params})
            .toPromise()
            .then((res) => ({...res}));
  }
  
}
