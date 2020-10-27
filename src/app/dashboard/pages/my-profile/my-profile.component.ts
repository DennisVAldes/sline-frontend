import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { CasesService } from 'src/app/services/cases.service';
import { CaseDto, UserDto } from 'src/app/types/dtos/models';
import { sexTypes } from 'src/app/types/enums';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  
  constructor(
    private casesService: CasesService,
    notifierService: NotifierService,
  ) {
    this.notifier = notifierService;
  }

  private readonly notifier: NotifierService;

  edit = false;
  updateImage = false;
  newImage: any;
  deleteCase = false;

  userData: UserDto = JSON.parse(localStorage.getItem('userData'));
  
  sexTypes = sexTypes;
  myCases: CaseDto[];
  
  private setUser = () => {
    try {
      this.userForm.controls['username'].setValue(this.userData.username);
      this.userForm.controls['email'].setValue(this.userData.email);
      this.userForm.controls['password'].setValue(this.userData.password);
      this.userForm.controls['sexo'].setValue(this.userData.sexo);
      this.userForm.controls['fecha_registro'].setValue(this.userData.fecha_registro);
      this.userForm.controls['fecha_nacimiento'].setValue(this.userData.fecha_nacimiento);
      this.userForm.controls['id'].setValue(this.userData.id);
      this.userForm.controls['image_url'].setValue(this.userData.image_url);

    } catch (error) {
      console.log(error)
    }
  }

  public userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
    fecha_registro: new FormControl('', [Validators.required]),
    fecha_nacimiento: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    image_url: new FormControl('', [])
  })

  public updateProfileImage = () => {
    try {
      console.log(this.newImage)
    } catch (error) {
      console.log(error)
    }
  }

  private getMyCases = async () => {
    try {
      const res = await this.casesService.getCaseByUserId();

      this.myCases = res.data;
    } catch (error) {
      console.log(error)
    }
  }

  public deleteCaseById = async (id: string) => {
    let res = await this.casesService.deleteCaseById(id);
    this.ngOnInit();
    this.notifier.notify("succes", res.message)
  }

  ngOnInit(): void {
    this.setUser();
    this.getMyCases();
  }

}