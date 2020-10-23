import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CasesService } from 'src/app/services/cases.service';
import { CaseDto, UserDto } from 'src/app/types/dtos/models';
import { violenceTypes, violenceTypesDefinitions } from 'src/app/types/enums';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.css']
})
export class CaseEditComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private caseService: CasesService,
    notifierService: NotifierService,
    private routerService: Router
  ) {
    this.notifier = notifierService; 
  }

  id: string;
  private sub: any;
  caseData: Partial<CaseDto>;
  userData: UserDto = JSON.parse(localStorage.getItem('userData'));

  violenceTypes = violenceTypes;
  violenceTypesDefinitions = violenceTypesDefinitions;

  private readonly notifier: NotifierService;
  
  private getCase = async () => {
    try {
      this.caseData = (await this.caseService.getCaseById(this.id)).data[0];
      
      this.caseForm.controls['id_caso'].setValue(this.caseData.id_caso);
      this.caseForm.controls['tipo_violencia'].setValue(this.caseData.tipo_violencia);
      this.caseForm.controls['descripcion'].setValue(this.caseData.descripcion);

    } catch (error) {
      console.log(error)
    }
  }

  public caseForm = new FormGroup({
    id_caso: new FormControl('', [Validators.required]),
    tipo_violencia: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  })

  public setCase = () => {
    return {
      "id_caso": this.caseForm.value.id_caso,
      "tipo_violencia": this.caseForm.value.tipo_violencia,
      "descripcion": this.caseForm.value.descripcion
    }
  }

  public updateCase = async () => {
    try {
      let _case: Partial<CaseDto> = this.setCase();

      let res = await this.caseService.updateCase(_case);
      console.log(res)

      this.notifier.notify("success", res.message);
      this.routerService.navigateByUrl("/my-profile");
    } catch (error) {
      console.log(error);
    }
  } 

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
