import { Component, OnInit } from '@angular/core';
import { CasesService } from 'src/app/services/cases.service';
import { CaseDto } from 'src/app/types/dtos/models';

@Component({
  selector: 'app-list-cases',
  templateUrl: './list-cases.component.html',
  styleUrls: ['./list-cases.component.css']
})
export class ListCasesComponent implements OnInit {

  constructor(
    private caseService: CasesService
  ) { }

  open = false;

  async ngOnInit() {
    await this.getCases();
    console.log(this.listCases)
  }

  listCases: CaseDto[];

  private getCases = async () => {
    try {
      const response = await this.caseService.getCases();

      this.listCases = response.data;
    } catch (error) {
      console.log()
    }
  }
}
