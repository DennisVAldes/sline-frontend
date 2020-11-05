import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CasesService } from 'src/app/services/cases.service';
import { CaseDto } from 'src/app/types/dtos/models';
import MarkerClusterer from '@google/markerclusterer';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  
  constructor(
    private caseService: CasesService
  ) { }
 
  listCases: CaseDto[] = [];

  private getCases = async () => {
    try {
      const response = await this.caseService.getCases();

      this.listCases = response.data;
    } catch (error) {
      console.log(error)
    }
  }

  initMap() {

    var pos;

    var map = new google.maps.Map(this.gmap.nativeElement, {
      center: pos,
      zoom: 16,
      fullscreenControl: false
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
      url: 'https://res.cloudinary.com/sline-uy/image/upload/v1602080776/user-pin.svg', // url
      scaledSize: new google.maps.Size(50, 50), // scaled sizes
    };

    var caseIcon = {
      url: 'https://res.cloudinary.com/sline-uy/image/upload/v1602080775/report.svg', // url
      scaledSize: new google.maps.Size(50, 50), // scaled sizes
    };
  
    // Let user position on map
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

    try {
      // Listar casos en el mapa
      let markers = [];
      let infoWindows = [];
      let caseMarker = new google.maps.Marker;
      let caseInfoWindow = new google.maps.InfoWindow;

      // Creo un marcador por cada elemento del array, y lo agrego al mapa 
      for (let i = 0; i < this.listCases.length; i++) {
        const caseData: CaseDto = this.listCases[i];
        
        var casePos = { 
          lat: +caseData.lat, 
          lng: +caseData.lng 
        }

        caseMarker = new google.maps.Marker({
          position: casePos,
          icon: caseIcon,
          title: `Caso numero ${caseData.id_caso}`
        });

        caseInfoWindow = new google.maps.InfoWindow({
          content:
          `<div id="content">
            <p>Tipo: ${caseData.tipo_violencia}</p>
            <p>Registro de caso: ${caseData.fecha_registro}</p>
            <p>Verificado: ${caseData.verificado ? 'Si' : 'No'}</p>
            <a href="/cases/${caseData.id_caso}">Ver caso</a>
          </div>`
        })

        infoWindows.push(caseInfoWindow);
        markers.push(caseMarker);
      }

      // Agregar los infoWindow a cada marcador
      for (let i = 0; i < markers.length; i++) {
        const _marker = markers[i];

        _marker.addListener('click', function () {
          caseInfoWindow.close();
          caseInfoWindow = infoWindows[i];
          caseInfoWindow.open(map, _marker);
        }) 
      }

      const markerCluster = new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });

    } catch(error){
      console.log("Lista de casos vacia")
    }
  }

  async ngAfterViewInit(): Promise<void> {
    await this.getCases();
    this.initMap(); 
  }
}
