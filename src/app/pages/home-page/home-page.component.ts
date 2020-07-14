import { Component, AfterViewInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDto } from 'src/app/types/dtos/models';
import { UserService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements AfterViewInit {
  
  constructor(
    private modalService: NgbModal, 
    private userService: UserService,
    private router: Router,
    private notifierService: NotifierService
  ){}
  
  modal : NgbModalRef;
  
  letModal = false;

  private readonly notifier: NotifierService = this.notifierService;

  public signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    sexo: new FormControl('', [Validators.required]),
    fechanac: new FormControl('', [Validators.required])
  });

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  public openModal(content) {
    this.modal = this.modalService.open(content)          
  }

  public closeModal() {
    this.modal.close();
  }
  
  private setUser = (): UserDto => {
		return {
			"username": this.signupForm.value.username,
			"email": this.signupForm.value.email,
			"password": this.signupForm.value.password,
			"sexo": this.signupForm.value.sexo,
			"fechanac": this.signupForm.value.fechanac,
		};
  };
  
  public submitUser = async () => {
    try {
			const user = await this.setUser();
      await this.userService.createUser(user);

      this.closeModal();
      this.notifier.notify(
        "success",
        "Usuario registrado correctamente!"
      );
      this.router.navigate(['/users'], {state: {back: false}});
		} catch (err) {
			console.error(err);
		}
	};

  ngAfterViewInit(){
  }
}