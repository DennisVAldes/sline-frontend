import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserDto } from 'src/app/types/dtos/models';
import { UserService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  
  letModal = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    sexo: new FormControl('', [Validators.required]),
    fechanac: new FormControl('', [Validators.required])
  });

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

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
      console.log(user);

      await this.userService.createUser(user);

      this.router.navigate(['/users'], {state: {back: true}});
		} catch (err) {
			console.error(err);
		}
	};

}
