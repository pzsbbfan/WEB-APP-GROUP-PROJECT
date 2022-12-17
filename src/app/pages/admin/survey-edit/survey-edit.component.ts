import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { selectedSurvey } from 'src/app/model/selected.model';
import { SurveyRepository } from 'src/app/model/survey.repository';


@Component({
  selector: 'app-book-editor',
  templateUrl: 'survey-edit.component.html',
  providers:[selectedSurvey]
})
export class SurveyEditComponent implements OnInit {

  submitted = false;
  survey:selectedSurvey = new selectedSurvey();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private repository: SurveyRepository,
    private router:Router,
    activateRoute: ActivatedRoute) 
    {
        Object.assign(this.survey, repository.getSurvey(activateRoute.snapshot.params['title']));
    }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
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
      this.survey.title = this.reactiveForm.get('surveyDetail.title').value;
      this.survey.type = this.reactiveForm.get('surveyDetail.type').value;
      this.survey.startdate = this.reactiveForm.get('surveyDetail.startdate').value;
      this.survey.enddate = this.reactiveForm.get('surveyDetail.enddate').value;
      this.survey.question = this.reactiveForm.get('question').value;
      this.repository.updateSurvey(this.survey);
      this.router.navigateByUrl('/survey/table');
    }
    console.log(this.reactiveForm);
  }

  addQuestion(){
    (<FormArray>this.reactiveForm.get('question')).push(new FormControl(null,Validators.required));
  }

  save(form :NgForm):void
  {
    this.repository.saveSurvey(this.survey);
    this.router.navigateByUrl('/admin');
  }

}
