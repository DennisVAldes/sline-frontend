import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CasesService } from 'src/app/services/cases.service';
import { ApiResponse, CaseDto, UserDto } from 'src/app/types/dtos/models';
import { violenceTypesDefinitions, violenceTypes } from 'src/app/types/enums';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})

export class CreateCaseComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private casesService: CasesService,
    notifierService: NotifierService,
    private routerService: Router
  ) {
    this.notifier = notifierService; 
  }

  private readonly notifier: NotifierService;
  id: string;
  private sub: any;
  caseData: Partial<CaseDto>;
  userData: UserDto = JSON.parse(localStorage.getItem('userData'));

  violenceTypes = violenceTypes;
  violenceTypesDefinitions = violenceTypesDefinitions;
  
  private getCase = async () => {
    try {
      let res = await this.casesService.getCaseById(this.id);
      this.caseData = res.data[0];

      this.caseForm.controls['id_caso'].setValue(this.caseData.id_caso);
      this.caseForm.controls['tipo_violencia'].setValue(this.caseData.tipo_violencia);
      this.caseForm.controls['descripcion'].setValue(this.caseData.descripcion);
      this.caseForm.controls['lat'].setValue(this.caseData.lat);
      this.caseForm.controls['lng'].setValue(this.caseData.lng);

    } catch (error) {
      console.log(error)
    }
  }

  public caseForm = new FormGroup({
    id_caso: new FormControl(''),
    tipo_violencia: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    lat: new FormControl(''),
    lng: new FormControl('')
  })

  public initMap = async () => {
    var pos;
    
    var map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 16,
    });
   
    map.setTilt(45);

    var infoWindow = new google.maps.InfoWindow({
      content: 
      '<div id="content">'+
        this.caseData ? 'Ubicacion de reporte' : 'Usted está aquí.'+
      '</div>'
    });
    
    var userMarker = new google.maps.Marker;
    
    var icon = {
      url: this.caseData ? 'https://res.cloudinary.com/sline-uy/image/upload/v1602080775/report.svg' : 'https://res.cloudinary.com/sline-uy/image/upload/v1602080776/user-pin.svg',
      scaledSize: new google.maps.Size(50, 50), // scaled sizes
    };

    if (this.caseData) {
      pos = {
        lat: +this.caseData.lat,
        lng: +this.caseData.lng
      };

      map.setCenter(pos);
      
      userMarker.setValues({
        position: pos,
        map: map,
        icon: icon,
        title: 'Ultima posicion seleccionada'
      });
    } else {
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
          title: 'Su posicion'
        });
      });
    }

    userMarker.addListener('click', function(){
      infoWindow.open(map, userMarker)
    });

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

  public updateCase = async () => {
    try {
      let _case: Partial<CaseDto> = this.setCase();

      let res = await this.casesService.updateCase(_case);
      console.log(res)

      this.notifier.notify("success", res.message);
      this.routerService.navigateByUrl("/my-profile");
    } catch (error) {
      console.log(error);
    }
  } 

  async ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    await this.getCase();
    this.initMap();
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
