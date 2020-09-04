import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
 
  initMap() {
    var pos;
    
    var map = new google.maps.Map(this.gmap.nativeElement, {
      center: pos,
      zoom: 16,
      
    });
   
    map.setTilt(45);

    var infowindow = new google.maps.InfoWindow({
      content: 
      '<div id="content">'+
        'Usted está aquí.'+
      '</div>'
    });

    var userMarker = new google.maps.Marker;

    // Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        
        userMarker.setValues({
          position: pos,
          map: map,
          icon: '../../assets/img/home-marker.svg',
          title: 'Su posicion', });
      });

        userMarker.addListener('click', function(){
          infowindow.open(map, userMarker)
        });
    };
  };

  ngAfterViewInit(): void {
    this.initMap();
  }
}
