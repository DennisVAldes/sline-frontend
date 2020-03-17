import { Component, OnInit} from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor( private NavbarService: NavbarService ) { }
  
  get isNavbarExpand(): boolean {
    return this.NavbarService.isNavbarExpand;
  }

  status:boolean = this.isNavbarExpand;

  toggleNavbar() {
      this.NavbarService.toggleNavbarSize()
  }

}
