import { Component, OnInit, NgModule } from '@angular/core';
import { NavbarComponent } from "./../navbar/navbar.component"
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor(
    private navStatus: NavbarComponent,
    private eventEmitterService: EventEmitterService
  ) { }

  status: boolean;
  
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
    
    this.status = this.navStatus.getStatus();

    console.log(this.status)
  }

  getStatus(){
    this.eventEmitterService.onFirstComponentButtonClick();
  }

}