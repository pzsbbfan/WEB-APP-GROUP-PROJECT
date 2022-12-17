import { Component,Input,OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { ConnectService } from 'src/app/service/connect.service';
import { submitSurvey } from 'src/app/model/submittedSurvey.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers:[submitSurvey]

})

export class SurveyComponent implements OnInit {

  answers = [];
  
  survey:Survey= {};


  constructor(private repository:SurveyRepository,
    public connectService:ConnectService,
    public submitted:submitSurvey,
    private router:Router
    )
  {
   
  }
  ngOnInit():void{
    this.survey = this.connectService.selectedSurvey;
  }

  OnSubmit(){
    this.submitted.title = this.survey.title;
    this.submitted.answer = this.answers;
    console.log(this.submitted);
    this.repository.saveSubmittedSurvey(this.submitted).subscribe(Submitted=>{});
    window.alert("Successfully submitted survey!");
    this.router.navigateByUrl('survey');
  };

}
