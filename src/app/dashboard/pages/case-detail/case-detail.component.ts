import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasesService } from 'src/app/services/cases.service';
import { CaseDto } from 'src/app/types/dtos/models';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css']
})
export class CaseDetailComponent implements OnInit, OnDestroy {

  id: string;
  private sub: any;
  case;

  constructor(
    private route: ActivatedRoute,
    private caseService: CasesService
  ) {}
  
  private getCase = async () => {
    try {
      this.case = (await this.caseService.getCaseById(this.id)).data;
      console.log(this.case)
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
    });

    this.getCase();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
