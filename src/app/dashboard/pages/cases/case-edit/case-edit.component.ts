import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CasesService } from 'src/app/services/cases.service';
import { CaseDto } from 'src/app/types/dtos/models';
import { violenceTypes, violenceTypesDefinitions } from 'src/app/types/enums';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.css']
})
export class CaseEditComponent implements OnInit, OnDestroy {

  id: string;
  private sub: any;
  caseData: CaseDto;

  constructor(
    private route: ActivatedRoute,
    private caseService: CasesService
  ) {}
  
  private getCase = async () => {
    try {
      this.caseData = (await this.caseService.getCaseById(this.id)).data;
      
      this.caseForm.controls['tipo_violencia'].setValue(this.caseData.tipo_violencia);
      this.caseForm.controls['descripcion'].setValue(this.caseData.descripcion);
      this.caseForm.controls['lat'].setValue(this.caseData.lat);
      this.caseForm.controls['lng'].setValue(this.caseData.lng);

    } catch (error) {
      console.log(error)
    }
  }

  public caseForm = new FormGroup({
    tipo_violencia: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    lat: new FormControl(''),
    lng: new FormControl(''),
  })

  violenceTypes = violenceTypes;
  violenceTypesDefinitions = violenceTypesDefinitions;

  edit = false;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
    });

    this.getCase();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
