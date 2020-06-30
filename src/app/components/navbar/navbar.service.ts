import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  isNavbarExpand: boolean = false;

  navbarSizeChange: Subject<boolean> = new Subject<boolean>();

  constructor( ) {
    this.navbarSizeChange.subscribe((value) => {
      this.isNavbarExpand = value
    })
  }
  
  toggleNavbarSize(){
    this.navbarSizeChange.next(!this.isNavbarExpand);
  }
}
