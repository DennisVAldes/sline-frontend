import { Component, OnInit } from '@angular/core';
import { NavbarService } from './../navbar/navbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private NavbarService: NavbarService ) {}
  
  get isNavbarExpand(): boolean {
    return this.NavbarService.isNavbarExpand;
  }
  ngOnInit(): void {
  }

}
