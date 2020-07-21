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

  constructor(
    
  ) {}

  // public openModal(content) {
  //   this.modal = this.modalService.open(content)          
  // }

  // public closeModal() {
  //   this.modal.close();
  //   this.signupForm.reset();
  //   this.loginForm.reset();
  // }

  ngAfterViewInit(){
  }
}