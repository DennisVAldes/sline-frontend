import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit() {
    if(this.eventEmitterService.subsVar==undefined){
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeStatus.subscribe(() => {
        this.clickEvent();
      })
    }
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  getStatus(){
    return this.status;
  }

}
