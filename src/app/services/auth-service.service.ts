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

  public login = async (newUser: Partial<UserDto>): Promise<ApiResponse<UserDto>> =>
            this.http
                .post<ApiResponse<UserDto>>(`${this.apiHost}/user/login`, newUser)
                .toPromise();
  
}
