import { Component, OnInit } from '@angular/core';
import { selectedSurvey } from 'src/app/model/selected.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[selectedSurvey]
})
export class CreateComponent implements OnInit{
  submitted = false;
  constructor(public repository : SurveyRepository,
              public selectedSurvey : selectedSurvey,
              public router:Router){}

              reactiveForm: FormGroup;
  
              ngOnInit(){
                this.reactiveForm = new FormGroup({
                  surveyDetail: new FormGroup({
                    title: new FormControl(null,Validators.required),
                    type: new FormControl('True/False',Validators.required),
                    startdate: new FormControl(null,Validators.required),
                    enddate: new FormControl(null,Validators.required),
                  }),
                  question: new FormArray([
                    new FormControl(null,Validators.required),
                    new FormControl(null,Validators.required),
                    new FormControl(null,Validators.required),
                  ])
                });
              }
 

  onSubmit(){
    if(this.reactiveForm.valid)
    {
      this.selectedSurvey.title = this.reactiveForm.get('surveyDetail.title').value;
      this.selectedSurvey.type = this.reactiveForm.get('surveyDetail.type').value;
      this.selectedSurvey.startdate = this.reactiveForm.get('surveyDetail.startdate').value;
      this.selectedSurvey.enddate = this.reactiveForm.get('surveyDetail.enddate').value;
      this.selectedSurvey.question = this.reactiveForm.get('question').value;
      this.repository.saveSurvey(this.selectedSurvey).subscribe(Survey=>{});
      window.location.href="/survey";
    }
    console.log(this.reactiveForm);
  }

  addQuestion(){
    (<FormArray>this.reactiveForm.get('question')).push(new FormControl(null,Validators.required));
  }
}
