import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse, CaseDto } from '../types/dtos/models';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class CasesService {
    constructor( private http: HttpClient, private authService: AuthService ){}

    private apiHost = environment.API_ENDPOINT;

    public getCases = async(): Promise<ApiResponse<CaseDto[]>> => 
        this.http
            .get<ApiResponse<CaseDto[]>>(`${this.apiHost}/cases/`)
            .toPromise()
            .then((res) => ({...res}));
    
    public createCase = async (newCase: CaseDto) => {
        await this.http
            .post<ApiResponse<CaseDto[]>>(`${this.apiHost}/cases/add`, newCase)
            .toPromise();
        
    }
}