import { Component, OnInit } from '@angular/core';
import { NavbarService } from './../navbar/navbar.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  constructor( private NavbarService: NavbarService ) { 
  
  }
  
  get isNavbarExpand(): boolean {
    return this.NavbarService.isNavbarExpand;
  }

  zoom = 14
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap'
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }
}