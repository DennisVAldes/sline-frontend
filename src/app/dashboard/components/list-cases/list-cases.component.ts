import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cases',
  templateUrl: './list-cases.component.html',
  styleUrls: ['./list-cases.component.css']
})
export class ListCasesComponent implements OnInit {

  constructor( ) { }

  open = false;

  ngOnInit(): void {
  }
}
