import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  isRegisterCalled: boolean = false;

  registerCalled: Subject<boolean> = new Subject<boolean>();

  constructor( ) {
    this.registerCalled.subscribe((value) => {
      this.isRegisterCalled = value
    })
  }
  
  toggleNavbarSize(){
    this.registerCalled.next(!this.isRegisterCalled);
  }
}
