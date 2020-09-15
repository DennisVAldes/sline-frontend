import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse, CaseDto } from '../types/dtos/models';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class UserService {
    constructor( private http: HttpClient, private authService: AuthService ){}

    private apiHost = environment.API_ENDPOINT;

    public getUsers = async(): Promise<ApiResponse<CaseDto[]>> => 
        await this.http
                .get<ApiResponse<CaseDto[]>>(`${this.apiHost}/users/`)
                .toPromise()
                .then((res) => ({...res}));
    
    public createUser = async (newCase: CaseDto) => {
        await this.http
            .post<ApiResponse<CaseDto[]>>(`${this.apiHost}/cases/add`, newCase)
            .toPromise();
        
    }
}