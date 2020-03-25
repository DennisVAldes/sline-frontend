import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userInformationForm(userInformation: Users) : Observable<Users>{
    return of(userInformation);
  }
}
