import { Component, AfterViewInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDto } from 'src/app/types/dtos/models';
import { UserService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements AfterViewInit {

  modal : NgbModalRef;
  
  public myForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    sexo: new FormControl('', [Validators.required]),
    fechanac: new FormControl('', [Validators.required])
  });

  constructor(
    private modalService: NgbModal, 
    private userService: UserService,
    private router: Router
  ) {}

  public openModal(content) {
    this.modal = this.modalService.open(content)          
  }

  public closeModal() {
    this.modal.close();
  }
  
  private setUser = (): UserDto => {
		return {
			"username": this.myForm.value.username,
			"email": this.myForm.value.email,
			"password": this.myForm.value.password,
			"sexo": this.myForm.value.sexo,
			"fechanac": this.myForm.value.fechanac,
		};
  };
  
  public submitUser = async () => {
    try {
			const user = await this.setUser();
      console.log(user);

      await this.userService.createUser(user);

      this.closeModal();

      this.router.navigate(['/users'], {state: {back: true}});
		} catch (err) {
			console.error(err);
		}
	};

  ngAfterViewInit(){
  }
}