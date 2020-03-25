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

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  @ViewChild('legend') legend: ElementRef;
  
  initMap() {
    var pos;
    var map = new google.maps.Map(this.gmap.nativeElement, {
      center: pos,
      zoom: 16
    });

    // Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        var marker = new google.maps.Marker(
          { 
            position:pos,
            map: map,
            icon: '../../assets/img/home-marker.svg' });
      })
    } 
  }

  ngAfterViewInit() {
    this.initMap();
  }
}