import { Component,Input,OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { ConnectService } from 'src/app/service/connect.service';
import { selectedSurvey } from 'src/app/model/selected.model';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})

export class SurveyComponent implements OnInit {

  
  survey:Survey= {};

  constructor(private repository:SurveyRepository,
    public connectService:ConnectService,
    )
  {
   
  }
  ngOnInit():void{
    this.survey = this.connectService.selectedSurvey;
  }
  
}
