import { Component, OnInit} from '@angular/core';
import { NavbarService } from './navbar.service';
import { RegisterService } from '../../pages/register/register.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor( private NavbarService: NavbarService, private RegisterService: RegisterService ) { }
  
  get isNavbarExpand(): boolean {
    return this.NavbarService.isNavbarExpand;
  }

  get isRegisterCalled(): boolean {
    return this.RegisterService.isRegisterCalled;
  }

  callRegister() {
    this.RegisterService.callRegister();
  }

  toggleNavbar() {
      this.NavbarService.toggleNavbarSize()
  }

}
