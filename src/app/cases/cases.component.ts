import { Component, OnInit } from '@angular/core';
import { NavbarService } from './../navbar/navbar.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  constructor( private NavbarService: NavbarService ) { }

  get isNavbarExpand(): boolean {
    return this.NavbarService.isNavbarExpand;
  }
  
  ngOnInit(): void {
  }

}
