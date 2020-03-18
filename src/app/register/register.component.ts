import { Component, OnInit} from '@angular/core';
import { RegisterService } from './register.service';
import { Users } from './../interfaces/users'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor( private RegisterService: RegisterService ) {}
  
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

  ngOnInit(): void {
  }

}
