import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  userInformationForm(userInformation: Users) : Observable<any>{
    
    return this.http.post('https://putsreq.com/8Z3pFJqXiM1q6CMowjww', userInformation)
    
    //return of(userInformation);
  }
}
