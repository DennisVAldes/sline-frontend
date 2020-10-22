import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CasesService } from 'src/app/services/cases.service';
import { ApiResponse, CaseDto } from 'src/app/types/dtos/models';
import { violenceTypesDefinitions, violenceTypes } from 'src/app/types/enums';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})

export class CreateCaseComponent implements AfterViewInit {

  constructor(
    private casesService: CasesService,
    notifierService: NotifierService,
    private routerService: Router
  ) {
    this.notifier = notifierService; 
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
  
  private readonly notifier: NotifierService;

  public caseForm = new FormGroup({
    tipo_violencia: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    lat: new FormControl(''),
    lng: new FormControl('')
  })

  violenceTypes = violenceTypes;
  violenceTypesDefinitions = violenceTypesDefinitions;

  initMap() {
    var pos;
    
    var map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 16,
    });
   
    map.setTilt(45);

    var infoWindow = new google.maps.InfoWindow({
      content: 
      '<div id="content">'+
        'Usted está aquí.'+
      '</div>'
    });

    var userMarker = new google.maps.Marker;
    var icon = {
      url: 'https://res.cloudinary.com/sline-uy/image/upload/v1602080776/user-pin.svg', // url
      scaledSize: new google.maps.Size(50, 50), // scaled sizes
    };
  
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
          icon: icon,
          title: 'Su posicion',});
      });

      userMarker.addListener('click', function(){
        infoWindow.open(map, userMarker)
      });
    }

    let coordenadas;

    // Configure the click listener.
    map.addListener('click', function(mapsMouseEvent) {
      // Close the current InfoWindow.
      infoWindow.close();

      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
      infoWindow.setContent("Ubicacion seleccionada. Puede cambiarla en cualquier momento.");
      infoWindow.open(map);

      coordenadas = mapsMouseEvent.latLng.toJSON();

      document.getElementById('lat').innerText = coordenadas.lat;
      document.getElementById('lng').innerText = coordenadas.lng;
    });
  }

  private setCase = () => {
    this.caseForm.controls['lat'].setValue(document.getElementById('lat').textContent);
    this.caseForm.controls['lng'].setValue(document.getElementById('lng').textContent);

    return {
      "tipo_violencia": this.caseForm.value.tipo_violencia,
      "descripcion": this.caseForm.value.descripcion,
      "lat": this.caseForm.value.lat,
      "lng": this.caseForm.value.lng,
    }
  }

  public submitCase = async () => {
    try {
      let caseData: CaseDto = this.setCase();

      const response: ApiResponse<any> = await this.casesService.createCase(caseData);

      if(response.status === 200){
        this.notifier.notify("success", "Caso creado correctamente");
        this.routerService.navigateByUrl('/');
      } else {
        this.notifier.notify("success", response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
