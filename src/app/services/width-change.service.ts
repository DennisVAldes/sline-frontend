import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSizes {
  isNavbarExpand: boolean = false;
  isCreateCaseExpand: boolean = false;

  navbarSizeChange: Subject<boolean> = new Subject<boolean>();
  createCaseSizeChange: Subject<boolean> = new Subject<boolean>();

  constructor( ) {
    this.navbarSizeChange.subscribe((value) => {
      this.isNavbarExpand = value
    });

    this.createCaseSizeChange.subscribe((value) => {
        this.isCreateCaseExpand = value
    });
  }
  
  toggleNavbarSize(){
    this.navbarSizeChange.next(!this.isNavbarExpand);
  }

  toggleCreateCaseSize(){
    this.createCaseSizeChange.next(!this.isCreateCaseExpand);
  }
}