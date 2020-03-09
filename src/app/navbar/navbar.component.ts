import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor( ) { }
  
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  getStatus(){
    return this.status;
  }

}
