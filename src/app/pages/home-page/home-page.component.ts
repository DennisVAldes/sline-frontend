import { Component, AfterViewInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl } from '@angular/forms';
import { UserDto } from 'src/app/types/dtos/models';
import { UserService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements AfterViewInit {

  modal : NgbModalRef;
  
  public myForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    sexo: new FormControl(),
    fechanac: new FormControl()
  });

  constructor(
    private modalService: NgbModal, 
    private userService: UserService,
		private router: Router,
  ) {}

  public openModal(content) {
    this.modal = this.modalService.open(content)          
  }

  public closeModal() {
    this.modal.close();
  }
  
  private setUser = (): UserDto => {
		return {
			username: this.myForm.value.username,
			email: this.myForm.value.email,
			password: this.myForm.value.password,
			sexo: this.myForm.value.sexo,
			fechaNac: this.myForm.value.fechanac,
		};
  };
  
  public submitUser = async () => {
		try {

			const user = await this.setUser();
			console.log(user);

      const response = await this.userService.createUser(user);

			this.router.navigate(['/home'], {state: {back: true}});
		} catch (err) {
			console.error(err);
		}
	};

  ngAfterViewInit(){
  }
}