import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CaseDto } from 'src/app/types/dtos/models';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})
export class CreateCaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public caseForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    coordenadas: new FormControl('', [Validators.required])
  })

  private setCase = (): CaseDto => {
    return {
      "titulo": this.caseForm.value.titulo,
      "descripcion": this.caseForm.value.descripcion,
      "coordenadas": this.caseForm.value.coordenadas
    }
  }

}
