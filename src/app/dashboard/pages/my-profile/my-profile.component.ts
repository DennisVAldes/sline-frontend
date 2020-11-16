import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NotifierService } from 'angular-notifier';
import { CasesService } from 'src/app/services/cases.service';
import { UserService } from 'src/app/services/users.service';
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
    private userService: UserService,
    notifierService: NotifierService,
  ) {
    this.notifier = notifierService;
  }

  private readonly notifier: NotifierService;

  edit = false;
  updateImage = false;
  newImage: any;
  deleteCase = false;

  userData: Partial<UserDto>;
  
  sexTypes = sexTypes;  
  myCases: CaseDto[];

  public userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
    fecha_nacimiento: new FormControl('', [Validators.required]),
    image_url: new FormControl('', [])
  })

  private getUser = async() => {
    try {
      this.userData = JSON.parse(localStorage.getItem('userData'));

      this.userForm.controls['username'].setValue(this.userData.username);
      this.userForm.controls['email'].setValue(this.userData.email);
      this.userForm.controls['sexo'].setValue(this.userData.sexo);
      this.userForm.controls['fecha_nacimiento'].setValue(this.userData.fecha_nacimiento);
      this.userForm.controls['image_url'].setValue(this.userData.image_url);

    } catch (error) {
      console.log(error)
    }
  }

  private setUser = () => {
    return {
      "username": this.userForm.value.username,
      "email": this.userForm.value.email,
      "sexo": this.userForm.value.sexo,
      "fecha_nacimiento": this.userForm.value.fecha_nacimiento
    }
  }

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
    try {
      let res = await this.casesService.deleteCaseById(id);
      this.ngOnInit();
      this.notifier.notify("succes", res.message)
    } catch (error) {
      console.log(error)
    }
  }

  public updateUser = async () => {
    try {
      const user = this.setUser();
      this.userService.updateUser(user);
      this.edit = false;

      this.ngOnInit();

    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.getUser();
    this.getMyCases();
  }

}