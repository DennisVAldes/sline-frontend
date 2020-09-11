import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { UserDto, ApiResponse } from '../types/dtos/models';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class UserService {
    constructor( private http: HttpClient, private authService: AuthService ){}

    private apiHost = environment.API_ENDPOINT;

    public getUsers = async(): Promise<ApiResponse<UserDto[]>> => 
        this.http
            .get<ApiResponse<UserDto[]>>(`${this.apiHost}/users/`)
            .toPromise()
            .then((res) => ({...res}));
    
    public createUser = async (newUser: UserDto): Promise<ApiResponse<UserDto>> => {
        let res = await this.http
            .post<ApiResponse<UserDto>>(`${this.apiHost}/auth/signup`, newUser)
            .toPromise();
        
        localStorage.setItem(this.authService.TOKEN_KEY, (await res).token);
        return res;
    }
}