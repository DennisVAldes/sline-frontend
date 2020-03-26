import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { NavbarService } from './../navbar/navbar.service';
import {} from '@angular/google-maps';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements AfterViewInit {
  constructor( private NavbarService: NavbarService ) {}
  
  get isNavbarExpand(): boolean {
    return this.NavbarService.isNavbarExpand;
  }

  ngAfterViewInit() {
  }
}