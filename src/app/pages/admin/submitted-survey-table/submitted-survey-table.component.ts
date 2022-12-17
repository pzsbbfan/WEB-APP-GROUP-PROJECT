import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { submitSurvey } from 'src/app/model/submittedSurvey.model';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-book-table',
  templateUrl: './submitted-survey-table.component.html',
})
export class SurveyTableComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private repository: SurveyRepository,
    private router: Router) {} 

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }


  getSurveys():Survey[]
  {
    return this.repository.getSurveys();
  }

  deleteSurvey(id:number):void
  {
    if(confirm("Are you sure?") && id !==undefined)
      {
        this.repository.deleteSurvey(id);
      }
      else
      {
        window.location.reload();// refresh fix
        this.router.navigateByUrl('/survey');
      }
  }

  editSurvey(title:string):void
  {
    this.router.navigateByUrl('/survey/edit/'+title);
  }
}
