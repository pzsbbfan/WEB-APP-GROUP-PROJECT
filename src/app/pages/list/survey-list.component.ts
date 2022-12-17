import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { ConnectService } from 'src/app/service/connect.service';
import { Survey } from '../../model/survey.model';
import { SurveyRepository } from '../../model/survey.repository';
import { selectedSurvey } from 'src/app/model/selected.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],

})
export class SurveyListComponent  
{
  
  constructor(private repository: SurveyRepository,
    private connectService:ConnectService,
    private router:Router,)
  {
    
  }

  survey:Survey = {}
  
  ngOnInit():void{
    
  }

  get products(): Survey[]
  {
    return this.repository.getSurveys();
    //return this.repository.getSurveys();
  }
  



  getSurvey(id:number):void
  {
    this.survey = this.repository.getSurvey(id);
    this.connectService.selectedSurvey = this.survey;
    this.router.navigateByUrl('/survey-detail')
  }
}
