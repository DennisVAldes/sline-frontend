import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  status: boolean;

  statusChange: Subject<boolean> = new Subject<boolean>();

  constructor()  {
      this.statusChange.subscribe((value) => {
          this.status = value
      });
  }

  toggleMenuVisibility() {
      this.statusChange.next(!this.status);
  }
}
