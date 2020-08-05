import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserDto, ApiResponse } from '../types/dtos/models';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  private apiHost = environment.API_ENDPOINT;

  constructor( private http: HttpClient ) { }

  public login = async(email: string, password: string): Promise<any> => {
    this.http
        .post<any>(`${this.apiHost}/user/`, { email, password })
        .toPromise()
        .then((res) => ({ ...res }));
  }
  
}
