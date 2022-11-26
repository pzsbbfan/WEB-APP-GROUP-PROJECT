import { Component, OnInit } from '@angular/core';
import { Survey } from '../model/survey.model';
import { SurveyRepository } from '../model/survey.repository';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit 
{
  constructor(private repository: SurveyRepository)
  {}


  ngOnInit():void
  {

  }

  get products(): Survey[]
  {
    return this.repository.getSurveys();
  }
  
  get types(): string[]
  {
    return this.repository.getTypes();
  }
}
