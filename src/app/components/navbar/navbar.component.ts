import { Component, OnInit} from '@angular/core';
import { ToggleSizes } from 'src/app/services/width-change.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor( private toggleSizesService: ToggleSizes ) { }
  
  get isNavbarExpand(): boolean {
    return this.toggleSizesService.isNavbarExpand;
  }

  status:boolean = this.isNavbarExpand;

  toggleNavbar() {
      this.toggleSizesService.toggleNavbarSize()
  }
}
