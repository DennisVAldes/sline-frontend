import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { ApiResponse, CaseDto } from '../types/dtos/models';
import { AuthService } from './auth/auth.service';

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
    
    public createCase = async (newCase: CaseDto): Promise<ApiResponse<any>> => 
        this.http
            .post<ApiResponse<CaseDto[]>>(`${this.apiHost}/cases/add`, newCase)
            .toPromise();

    public getCaseById = async (id: string): Promise<ApiResponse<Partial<CaseDto>>> => {
        let params = new HttpParams();
        params = params.append('dato', id);

        return await this.http
            .get<ApiResponse<Partial<CaseDto>>>(`${this.apiHost}/cases/id/${id}`)
            .toPromise()
            .then((res) => ({...res}));
    }
    
    public getCaseByUserId = async (): Promise<ApiResponse<CaseDto[]>> =>
        this.http
            .get<ApiResponse<CaseDto[]>>(`${this.apiHost}/cases/user`)
            .toPromise()
            .then((res) => ({...res}));
    
    public deleteCaseById = async (id: string) => {
        let params = new HttpParams();
        params = params.append('dato', id);

        return await this.http
            .delete<ApiResponse<CaseDto>>(`${this.apiHost}/cases/delete/${id}`)
            .toPromise();
    }

    public updateCase = async (newCase: Partial<CaseDto>): Promise<ApiResponse<any>> => 
        this.http
            .put<ApiResponse<CaseDto[]>>(`${this.apiHost}/cases/update`, newCase)
            .toPromise();
}