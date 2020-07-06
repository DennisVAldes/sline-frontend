import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { UserDto } from '../types/dtos/models';

@Injectable({
	providedIn: 'root',
})
export class UserService {
    constructor( private http: HttpClient ){}

    private apiHost = environment.API_ENDPOINT;

    public getUsers = async() => 
        this.http.get(`${this.apiHost}/user/`, {
            withCredentials: true
        })
    .toPromise()
    .then((res) => ({...res}));
}