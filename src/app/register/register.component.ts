import { Component, OnInit} from '@angular/core';
import { RegisterService } from './register.service';
import { Users } from '../data/users'
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor( private RegisterService: RegisterService, private dataService: DataService ) {}
  
  users: Users = {
    name: null,
    nickname: null,
    email: null,
    password: null
  }

  get isRegisterCalled(): boolean {
    return this.RegisterService.isRegisterCalled;
  }

  closeRegister() {
    this.RegisterService.callRegister();
  }

  onSubmit(form: NgForm){
    console.log(form.valid);
    this.dataService.userInformationForm(this.users).subscribe(
      result => console.log('success: ', result),
      error => console.log('error: ', error)
    );
  }

  ngOnInit(): void {
  }

}
