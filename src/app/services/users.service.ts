import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { UserDto, ApiResponse } from '../types/dtos/models';
import JwtDecode from 'jwt-decode';
import { userProfile } from '../types/enums';
import { async } from '@angular/core/testing';

@Injectable({
	providedIn: 'root',
})
export class UserService {
    constructor( private http: HttpClient ){}

    private apiHost = environment.API_ENDPOINT;

    public getUsers = async(): Promise<ApiResponse<UserDto[]>> => 
        this.http
            .get<ApiResponse<UserDto[]>>(`${this.apiHost}/users/`)
            .toPromise()
            .then((res) => ({...res}));
    
    public createUser = async (newUser: UserDto): Promise<ApiResponse<UserDto>> => {
        let res = await this.http
            .post<ApiResponse<UserDto>>(`${this.apiHost}/auth/signup`, newUser)
            .toPromise()
            .then((_res) => ({..._res}));
        
        
        var token = (await res).token;
        var decoded: any = await JwtDecode(token); 
    
        decoded.image_url = userProfile(decoded.sexo);

        localStorage.setItem('isLogged', 'true');
        localStorage.setItem('token', res.token);
        localStorage.setItem('userData', JSON.stringify(decoded));
        
        return res;
    }

    public updateProfileImage = async (image: any) => {
        await this.http
            .post<ApiResponse<UserDto>>(`${this.apiHost}/auth/signup`, image)
            .toPromise();
     
    }
    
    public getUserById = async(): Promise<ApiResponse<Partial<UserDto>>> =>
        this.http
            .get<ApiResponse<Partial<UserDto>>>(`${this.apiHost}/users/id`)
            .toPromise()
            .then((res) => ({...res}))

    public updateUser = async (user: Partial<UserDto>) => {
        let res = await this.http
                    .put<ApiResponse<UserDto>>(`${this.apiHost}/users/update`, user)
                    .toPromise()
                    .then((_res) => ({..._res}));
                    
        var token = res.token;
        var decoded: any = await JwtDecode(token)
        decoded.image_url = userProfile(decoded.sexo);
        
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
    
        localStorage.setItem('token', res.token);
        localStorage.setItem('userData', JSON.stringify(decoded));
        
    }

    public changePassword = async(data: {"currentPassword": string, "newPassword": string}) =>
        await this.http
            .put<ApiResponse<any>>(`${this.apiHost}/users/changePassword`, data)
            .toPromise()
            .then((_res) => ({..._res}));
}   
        