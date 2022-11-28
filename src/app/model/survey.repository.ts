import {Injectable} from '@angular/core';
import { Survey } from './survey.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class SurveyRepository
{
    private surveys:Survey[] = [];
    private types : string[]=[];
    public selectedSurvey : Survey = new Survey;

    constructor (private dataSource : StaticDataSource)
    {
        dataSource.getSurveys().subscribe(data=>{
            this.surveys = data;
            this.types = data.map(p=>p.type!)
            .filter((t,index,array)=>array.indexOf(t)===index).sort();
        });
    }
    getSurveys(type:string = null!):Survey[]
    {
       
        return this.surveys.filter(s=>type==null||type===s.type);
    }

    getSurvey(title?:string):Survey
    {
        return this.surveys.find(t=>t.title === title)!;
    }

    getTypes():string[]
    {
        return this.types;
    }

}