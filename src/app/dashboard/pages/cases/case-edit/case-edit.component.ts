import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CasesService } from 'src/app/services/cases.service';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.css']
})

export class CaseEditComponent {

  @ViewChild('map') gmap: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private caseService: CasesService,
    notifierService: NotifierService,
    private routerService: Router
  ) {
    // this.notifier = notifierService; 
  }

  // public caseForm = new FormGroup({
  //   id_caso: new FormControl('', [Validators.required]),
  //   tipo_violencia: new FormControl('', [Validators.required]),
  //   descripcion: new FormControl('', [Validators.required])
  // })

  // public setCase = () => {
  //   return {
  //     "id_caso": this.caseForm.value.id_caso,
  //     "tipo_violencia": this.caseForm.value.tipo_violencia,
  //     "descripcion": this.caseForm.value.descripcion
  //   }
  // }

  
  
}
