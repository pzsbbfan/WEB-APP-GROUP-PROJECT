import {Injectable} from '@angular/core';
import { Survey } from './survey.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { selectedSurvey } from './selected.model';
import { submitSurvey } from './submittedSurvey.model';

@Injectable()
export class SurveyRepository
{
    private surveys:Survey[] = [];

   

    public submittedSurvey: submitSurvey = new submitSurvey;
    
    public selectedSurvey : Survey = new Survey;

    constructor (private dataSource : RestDataSource)
    {
        dataSource.getSurvey().subscribe(data=>{
            this.surveys = data;
        });

  
    }
    getSurveys(type:string = null!):Survey[]
    {
       
        return this.surveys.filter(s=>type==null||type===s.type);
    }



    getSurvey(id:number):Survey
    {
        return this.surveys.find(t=>t._id === id)!;
    }


    saveSurvey(survey:selectedSurvey):Observable<Survey>
    {
        return this.dataSource.saveSurvey(survey);
    }

    saveSubmittedSurvey(submit:submitSurvey):Observable<submitSurvey>
    {
        return this.dataSource.saveSubmittedSurvey(submit);
    }

    deleteSurvey(deletedSurveyID:number):void
    {
        this.dataSource.deleteSurvey(deletedSurveyID).subscribe(survey=>{
            this.surveys.splice(this.surveys.findIndex(s=>s._id ===deletedSurveyID),1);
        })
    }

    updateSurvey(savedSurvey:Survey):void
    {
            console.log(savedSurvey._id);
            this.dataSource.updateSurvey(savedSurvey).subscribe(book =>{
                this.surveys.splice(this.surveys.findIndex(b=>b._id ===savedSurvey._id),1,savedSurvey);
            });
     
    }

}