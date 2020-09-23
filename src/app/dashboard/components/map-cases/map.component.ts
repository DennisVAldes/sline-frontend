import { Component, AfterViewInit } from '@angular/core';
import { CasesService } from 'src/app/services/cases.service';
import { CaseDto } from 'src/app/types/dtos/models';
import MarkerClusterer from '@google/markerclusterer';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  constructor(
    private caseService: CasesService
  ) { }
 
  listCases: CaseDto[] = [];

  private getCases = async () => {
    try {
      const response = await this.caseService.getCases();

      this.listCases = response.data;
    } catch (error) {
      console.log()
    }
  }

  initMap() {
    var pos;
    
    var map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 16,
      
    });
   
    map.setTilt(45);

    var infoWindow = new google.maps.InfoWindow({
      content: 
      `<div id="content">
        Usted está aquí.
      </div>`
    });

    var userMarker = new google.maps.Marker;
    
    var userIcon = {
      url: '../../assets/img/user-pin.svg', // url
      scaledSize: new google.maps.Size(50, 50), // scaled sizes
    };

    var caseIcon = {
      url: '../../assets/img/report.svg', // url
      scaledSize: new google.maps.Size(50, 50), // scaled sizes
    };
  
    // User position
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
          icon: userIcon,
          title: 'Su posicion',});
      });

      userMarker.addListener('click', () => infoWindow.open(map, userMarker));
    }

    // Cases positions
    let markers = []
    for (let i = 0; i < this.listCases.length; i++) {
      const caseData: CaseDto = this.listCases[i];
      
      var casePos = { 
        lat: +caseData.lat, 
        lng: +caseData.lng 
      }

      var marker = new google.maps.Marker({
        position: casePos,
        icon: caseIcon,
        title: `Caso numero ${caseData.idcaso}`,
      });

      markers.push(marker);
    }
    
    var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }

  async ngAfterViewInit(): Promise<void> {
    await this.getCases();
    this.initMap();
  }
}
