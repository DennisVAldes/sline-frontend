import { HttpClient, HttpParams } from '@angular/common/http';
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
    
    public createCase = async (newCase: CaseDto): Promise<ApiResponse<any>> => 
        this.http
            .post<ApiResponse<CaseDto[]>>(`${this.apiHost}/cases/add`, newCase)
            .toPromise();

    public getCaseById = async (id: string): Promise<ApiResponse<CaseDto>> => {
        let params = new HttpParams();
        params = params.append('id', id);

        return await this.http
            .get<ApiResponse<CaseDto>>(`${this.apiHost}/cases/${id}`)
            .toPromise()
            .then((res) => ({...res}));
    }
        
}