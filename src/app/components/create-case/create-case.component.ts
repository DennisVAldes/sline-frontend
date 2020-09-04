import { Component, OnInit } from '@angular/core';
import { ToggleSizes } from 'src/app/services/width-change.service';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})
export class CreateCaseComponent implements OnInit {

  constructor( private toggleSizesService: ToggleSizes ) { }

  ngOnInit(): void {
  }

  get isCreateCaseExpand(): boolean {
    return this.toggleSizesService.isCreateCaseExpand;
  }

  status:boolean = this.isCreateCaseExpand;

  toggleNavbar() {
      this.toggleSizesService.toggleCreateCaseSize()  
  }
}
