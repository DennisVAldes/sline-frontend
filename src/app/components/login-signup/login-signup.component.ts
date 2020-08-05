import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserDto } from 'src/app/types/dtos/models';
import { UserService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  
  letModal = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthServiceService
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
  
  private getUser = () => {
    return {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
  }

  public login = async () => {
    try {
      const user = await this.getUser();

      await this.authService.login(user);

      
    
    } catch (error) {
      console.error(error);
    }
  }

  public submitUser = async () => {
    try {
			const user = await this.setUser();

      await this.userService.createUser(user);

		} catch (err) {
			console.error(err);
		}
	};

}
